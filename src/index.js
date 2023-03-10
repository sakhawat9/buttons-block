import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

// const x = 0;

registerBlockType( metadata.name, {
	edit: Edit,
	save,
} );
