import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	URLInput,
} from '@wordpress/block-editor';
import classnames from 'classnames';
import './editor.scss';
import { IconButton, PanelBody, RangeControl } from '@wordpress/components';

const { SelectControl } = wp.components;

export default function Edit( props ) {
	const { attributes, isSelected, setAttributes } = props;
	const {
		buttonSize,
		borderRadius,
		text,
		textAlignment,
		shadow,
		links,
		shadowOpacity,
		buttonUrl,
	} = attributes;

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { textAlignment: newAlignment } );
	};
	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};
	const toggleShadow = () => {
		setAttributes( { shadow: ! shadow } );
	};
	const toggleLinks = () => {
		setAttributes( { links: ! links } );
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
	const buttonSizeOptions = [
		{ value: 'size-small', label: __( 'Small' ) },
		{ value: 'size-normal', label: __( 'Normal' ) },
		{ value: 'size-medium', label: __( 'Medium' ) },
		{ value: 'size-large', label: __( 'Large' ) },
		{ value: 'size-extra-large', label: __( 'Extra Large' ) },
	];
	const borderRadiusOptions = [
		{ value: 'border-radius-squared', label: __( 'Squared' ) },
		{ value: 'border-radius-rounded', label: __( 'Rounded' ) },
		{ value: 'border-radius-circular', label: __( 'Circular' ) },
		{
			value: 'border-radius-extra-circular',
			label: __( 'Extra Circular' ),
		},
	];
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
				<PanelBody title={ 'Button Style' } initialOpen={ false }>
					<SelectControl
						label={ __( 'Button Size' ) }
						value={ buttonSize }
						options={ buttonSizeOptions.map(
							( { value, label } ) => ( {
								value,
								label,
							} )
						) }
						onChange={ ( newSize ) => {
							setAttributes( { buttonSize: newSize } );
						} }
					/>
					<SelectControl
						label={ __( 'Border Radius' ) }
						value={ borderRadius }
						options={ borderRadiusOptions.map(
							( { value, label } ) => ( {
								value,
								label,
							} )
						) }
						onChange={ ( newSize ) => {
							setAttributes( { borderRadius: newSize } );
						} }
					/>
				</PanelBody>
			</InspectorControls>
			<BlockControls
				controls={ [
					{
						icon: 'admin-page',
						title: __( 'Shadow', 'block-button' ),
						onClick: toggleShadow,
						isActive: shadow,
					},
					{
						icon: 'admin-links',
						title: __( 'Links', 'block-button' ),
						onClick: toggleLinks,
						isActive: links,
					},
				] }
			>
				<AlignmentToolbar
					value={ textAlignment }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>
			<div className="button-wrapper">
				<RichText
					{ ...useBlockProps( {
						className: `${ classes } ${ textClasses } ${ buttonSize } ${ borderRadius }`,
					} ) }
					onChange={ onChangeText }
					value={ text }
					placeholder={ __( 'Hello World!', 'block-button' ) }
					tagName="a"
					allowedFormats={ [] }
					isSelected={ isSelected }
				/>
				{ links && (
					<div className={ `bk-btn-form` }>
						<form
							onSubmit={ ( event ) => event.preventDefault() }
							className={ `bk-button bk-button-dual` }
						>
							<URLInput
								className="button-url"
								value={ buttonUrl }
								onChange={ ( value ) =>
									setAttributes( { buttonUrl: value } )
								}
							/>
							<IconButton
								icon="editor-break"
								label={ __( 'Apply' ) }
								type="submit"
							/>
						</form>
					</div>
				) }
			</div>
		</>
	);
}
