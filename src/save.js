import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';
export default function save( { attributes } ) {
	const { text, textAlignment, shadow, shadowOpacity } = attributes;

	const classes = classnames( `block-button-wrapper`, {
		'has-shadow': shadow,
		[ `shadow-opacity-${ shadowOpacity }` ]: shadow && shadowOpacity,
	} );
	const textClasses = classnames(
		`block-button-title`,
		`block-button-align-${ textAlignment }`
	);
	return (
		<div>
			<RichText.Content
				{ ...useBlockProps.save( { className: classes } ) }
				className={ textClasses }
				tagName="button"
				value={ text }
			/>
		</div>
	);
}
