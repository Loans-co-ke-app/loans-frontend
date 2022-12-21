import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Platform } from './types';
import {
	faFacebook,
	faGoogle,
	faLinkedin,
	faMailchimp,
	faTwitter,
	faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const shareMethod = (link: string, platform: Platform) => {
	// Create links for sharing on social media platforms
	const facebook = `https://www.facebook.com/sharer/sharer.php?u=${link}`;
	const twitter = `https://twitter.com/intent/tweet?url=${link}`;
	const google = `https://plus.google.com/share?url=${link}`;
	const linkedin = `https://www.linkedin.com/shareArticle?url=${link}`;
	const whatsapp = `https://api.whatsapp.com/send?text=${link}`;
	const email = `mailto:?subject=Check this out&body=${link}`;

	// Return the link based on the platform
	switch (platform) {
	case 'facebook':
		return { link: facebook, icon: faFacebook, color: 'blue' };
	case 'twitter':
		return { link: twitter, icon: faTwitter, color: 'blue' };
	case 'google':
		return { link: google, icon: faGoogle, color: 'red' };
	case 'linkedin':
		return { link: linkedin, icon: faLinkedin, color: 'blue' };
	case 'whatsapp':
		return { link: whatsapp, icon: faWhatsapp, color: 'green' };
	case 'email':
		return { link: email, icon: faMailchimp, color: 'red' };
	default:
		return link;
	}
};

export const getPlatforms = () => {
	const platforms: Platform[] = [
		'facebook',
		'twitter',
		'google',
		'linkedin',
		'whatsapp',
		'email'
	];
	const links = platforms.map((platform) => {
		const { link, icon, color } = shareMethod(
			window.location.href,
			platform as Platform
		) as { link: string; icon: IconDefinition | undefined; color: string };

		return {
			link,
			icon,
			platform,
			color
		};
	});

	return links;
};
