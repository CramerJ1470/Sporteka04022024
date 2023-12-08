import React from "react";
import "../../../index.css";
import "./Video.css";


function Video({ video }) {
	console.log(video);

	return (
		<>
			<div className="trailer">
				<iframe
					width="500"
					height="315"
					src={video.url}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</>
	);
}

export default Video;
