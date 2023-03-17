import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
import classnames from 'classnames';
import './editor.scss';
import { PanelBody, RangeControl } from '@wordpress/components';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { text, textAlignment, shadow, shadowOpacity } = attributes;

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { textAlignment: newAlignment } );
	};
	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};
	const toggleShadow = () => {
		setAttributes( { shadow: ! shadow } );
	};
	const onChangeShadowOpacity = ( newShadowOpacity ) => {
		setAttributes( {
			shadowOpacity: newShadowOpacity,
		} );
	};

	const classes = classnames( `block-button-wrapper`, {
		'has-shadow': shadow,
		[ `shadow-opacity-${ shadowOpacity }` ]: shadow && shadowOpacity,
	} );
	const textClasses = classnames(
		`block-button-title`,
		`block-button-align-${ textAlignment }`
	);
	return (
		<>
			<InspectorControls>
				{ shadow && (
					<PanelBody title={ __( 'Shadow Setting', 'button' ) }>
						<RangeControl
							label={ __( 'Shadow Opacity', 'button' ) }
							value={ shadowOpacity }
							min={ 10 }
							max={ 40 }
							step={ 10 }
							onChange={ onChangeShadowOpacity }
						/>
					</PanelBody>
				) }
			</InspectorControls>
			<BlockControls
				controls={ [
					{
						icon: 'admin-page',
						title: __( 'Shadow', 'block-button' ),
						onClick: toggleShadow,
						isActive: shadow,
					},
				] }
			>
				<AlignmentToolbar
					value={ textAlignment }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>
			<div
				{ ...useBlockProps( {
					className: classes,
				} ) }
			>
				<RichText
					{ ...useBlockProps( {
						className: classes,
					} ) }
					className={ textClasses }
					onChange={ onChangeText }
					value={ text }
					placeholder={ __( 'Hello World!', 'block-button' ) }
					tagName="button"
					allowedFormats={ [] }
				/>
			</div>
		</>
	);
}
