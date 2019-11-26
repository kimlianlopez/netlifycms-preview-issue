import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../pages/index';

const IndexPagePreview = ({ entry, getAsset }) => {
	const data = entry.getIn(['data']).toJS();

	if (data) {
		return (
			<IndexPageTemplate
				heroSection={data.heroSection}
				aboutSection={data.aboutSection}
				featuredSection={data.featuredSection}
				contactSection={data.contactSection}
			/>
		);
	} else {
		return <div>Loading...</div>;
	}
};

IndexPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	getAsset: PropTypes.func
};

export default IndexPagePreview;
