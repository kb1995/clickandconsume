import { injectGlobal } from "styled-components";

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

    html,body{
			padding: 0;
			margin: 0;
			height: 100vh;
    }

		#root{
			height: 100vh;
			>div{
				height: 100vh;
			}
		}

    body {
			font-family: 'Roboto Mono', monospace;
			font-size: 12px;
    };
`;
