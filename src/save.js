import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';
export default function save( { attributes } ) {
	const {
		buttonSize,
		borderRadius,
		text,
		textAlignment,
		shadow,
		shadowOpacity,
		buttonTarget,
		buttonUrl,
	} = attributes;

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
				{ ...useBlockProps.save( {
					className: `${ classes } ${ textClasses } ${ buttonSize } ${ borderRadius }`,
				} ) }
				tagName="a"
				rel="noopener noreferrer"
				value={ text }
				target={ buttonTarget ? '_blank' : '_self' }
				href={ buttonUrl }
			/>
		</div>
	);
}
