/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';


export default function useOnScreen(ref: any) {
	const [visible, setVisible] = React.useState<boolean>(false);
	const observer = new IntersectionObserver(([entry]) =>
		setVisible(entry.isIntersecting)
	);

	React.useEffect(() => {
		observer.observe(ref.current);

		// Remove the observer as soon as the component is unmounted
		return () => {
			observer.disconnect();
		};
	}, []);

	return { visible };
}
