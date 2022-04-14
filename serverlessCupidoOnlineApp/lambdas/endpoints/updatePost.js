const Responses = require("../common/API_Responses")
const Dynamo = require("../common/Dynamo")
const { withHooks, hooksWithValidation } = require("../common/hooks")
const yup = require("yup")

const tableName = process.env.DYNAMODB_POSTS_TABLE_NAME

const bodySchema = yup.object().shape({
	text: yup.string().required(),
})

const pathSchema = yup.object().shape({
	ID: yup.string().required(),
})

const handler = async (event) => {
	let ID = event.pathParameters.ID
	const { text } = event.body

	const res = await Dynamo.update({
		tableName,
		primaryKey: "ID",
		primaryKeyValue: ID,
		updateKey: "text",
		updateValue: text,
	})

	return Responses._200({})
}

exports.handler = hooksWithValidation({ bodySchema, pathSchema })(handler)
