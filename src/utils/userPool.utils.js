import { CognitoUserPool } from "amazon-cognito-identity-js"

const poolData = {
	UserPoolId: "sa-east-1_jYoDPHyBm",
	ClientId: "6utobk2enbmoik8jh6is7vblam",
}

export default new CognitoUserPool(poolData)
