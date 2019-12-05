import React, { Component } from 'react';

class Hymni extends Component {
	render() {
		return (
			<>
				<div className="page landing-page">
                    <div className="hymni">
                        <p className="song-header hymni-header">
                            {"Teekkarihymni"}
                        </p>
                        <p className="song-melody">{"trad."}</p>
                        <p className="song-lyrics">
                            {
                                [":,:Yö kuin sielu teekkarin on pimiä,",
                                "takajoukko nukkuu vain, nukkuu vain.",
                                "Tarhapöllön ääni kimiä",
                                "kuuluu pappilasta päin, kuuluu päin.",
                                "Ja taas, ja siis,",
                                "ja 1, 2, 3, 4, 5 :,:"]
                                .join('\n')
                            }
                        </p>
                    </div>
				</div>
			</>
		);
	}
}

export default Hymni;
