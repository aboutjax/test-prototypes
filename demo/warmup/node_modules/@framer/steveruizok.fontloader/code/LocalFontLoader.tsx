import * as React from 'react'
import { Frame, ControlType, PropertyControls } from 'framer'

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

type Props = {
	id: string
	source: string
	fontName: string
	fontWeight: number
	fontFile: string
	url: string
	height: number
	width: number
}

export class CustomFontLoader extends React.Component<Props> {
	cssNode: HTMLStyleElement
	styleNode: Text

	static propertyControls: PropertyControls = {
		source: {
			title: 'Source',
			type: ControlType.SegmentedEnum,
			options: ['webfont', 'url', 'file'],
			optionTitles: ['Web', 'URL', 'File'],
			defaultValue: 'file',
		},
		fontFile: {
			title: 'File',
			type: ControlType.File,
			allowedFileTypes: ['ttf', 'otf', 'woff'],
			hidden: ({ source }) => source !== 'file',
		},
		url: {
			title: 'URL',
			type: ControlType.String,
			defaultValue: 'https://',
			hidden: ({ source }) => source === 'file',
		},
		fontName: {
			title: 'Name',
			type: ControlType.String,
			defaultValue: 'MyFont',
		},
		fontWeight: {
			title: 'Weight',
			type: ControlType.String,
			defaultValue: 'normal',
		},
	}

	static defaultProps: Partial<Props> = {
		fontName: 'MyFont',
		height: 220,
		width: 240,
	}

	componentDidMount = () => {
		if (!window['customFonts']) {
			window['customFonts'] = {}
		}
		if (window['customFonts'][this.props.id]) {
			this.updateCSS(this.props)
		} else {
			this.addCSS()
		}
	}

	componentDidUpdate() {
		this.updateCSS(this.props)
	}

	addCSS = () => {
		const css = (window['customFonts'][
			this.props.id
		] = this.cssNode = document.createElement('style'))
		css.type = 'text/css'
		css.id = 'customFonts ' + this.props.id
		this.styleNode = document.createTextNode(this.getStyles())
		css.appendChild(this.styleNode)

		const head = document.getElementsByTagName('head')[0]
		head.appendChild(window['customFonts'][this.props.id])
	}

	updateCSS = (props) => {
		if (!this.styleNode) {
			return
		}

		window['customFonts'][props.id].removeChild(this.styleNode)
		this.styleNode = document.createTextNode(this.getStyles())
		window['customFonts'][props.id].appendChild(this.styleNode)
	}

	removeCSS = () => {
		if (
			window['customFonts'][this.props.id] &&
			window['customFonts'][this.props.id] === this.cssNode
		) {
			const head = document.getElementsByTagName('head')[0]
			head.removeChild(window['customFonts'][this.props.id])
		}
	}

	getStyles = () => {
		const { fontName, url, source, fontFile, fontWeight } = this.props

		console.log(source)

		if (source == 'webfont') {
			return `
@import url('${url}');`
		} else {
			return `
@font-face {
  font-family: ${fontName};
  font-weight: ${fontWeight || 100};
  src: url('${source == 'url' ? url : fontFile}');
};`
		}
	}

	render() {
		const { fontName, fontWeight } = this.props

		return (
			<div style={{ ...style }}>
				<div>
					<h3
						key={`${fontName}_${fontWeight}_example`}
						style={{
							fontFamily: fontName,
							fontWeight: fontWeight,
							color: 'rgba(0, 153, 255, 1.000)',
						}}
					>
						Custom Font Loader
					</h3>
					<ol style={{ margin: 'none', padding: 'none' }}>
						<li>
							Select a local font file using the <b>File</b> control.
						</li>{' '}
						<li>
							Enter the font's name using the <b>Name</b> control.
						</li>{' '}
						<li>
							Enter the font's weight using the <b>Weight</b> control.
						</li>{' '}
						<li>
							Place this component somewhere in the <b>first</b> Frame of your
							prototype.
						</li>{' '}
					</ol>
					<p>
						Feel free to <b>hide</b> this component in the Preview.
					</p>
				</div>
			</div>
		)
	}
}

const style: React.CSSProperties = {
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	color: '#8855FF',
	background: 'rgba(136, 85, 255, 0.1)',
	overflow: 'hidden',
	padding: 16,
}
