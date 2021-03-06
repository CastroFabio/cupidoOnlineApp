const Responses = require("../common/API_Responses")
const Dynamo = require("../common/Dynamo")
const { withHooks, hooksWithValidation } = require("../common/hooks")
const yup = require("yup")

const tableName = process.env.DYNAMODB_POSTS_TABLE_NAME

const bodySchema = yup.object().shape({
	name: yup.string().required(),
	text: yup.string().required(),
})

const pathSchema = yup.object().shape({
	ID: yup.string().required(),
})

const handler = async (event) => {
	let ID = event.pathParameters.ID
	const user = event.body
	user.ID = ID

	const newUser = await Dynamo.write(user, tableName)

	if (!newUser) {
		return Responses._400({ message: "Failed to write user by ID" })
	}
	return Responses._200({ newUser })
}

exports.handler = hooksWithValidation({ bodySchema, pathSchema })(handler)
