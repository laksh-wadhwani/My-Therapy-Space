import { transporter } from "../config/mailer.js"
import QueryModel from "../models/Query.js"
import { queryReceivedTemplate, queryReplyEmailTemplate } from "../utils/emailTemplates.js"

export const SendQuery = async(request, response) => {
    try {
        const {guardianName, childName, phoneNo, email, subject, message} = request.body
        const query = await QueryModel.findOne({childName, message})

        if(query)
            return response.status(400).json({error: "This query already exists"})

        const newQuery = new QueryModel({
            guardianName,
            childName,
            email,
            phoneNo,
            subject,
            message
        })
        await newQuery.save();

        await transporter.sendMail({
            from: email,
            to: process.env.SMTP_MAIL,
            subject: `New Query Received ${subject}`,
            html: queryReceivedTemplate(guardianName, childName, phoneNo, email, subject, message)
        })

        return response.status(200).json({message: "Message has been successfully sent"})
    } catch (error) {
        console("Getting Error in sending query")
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const GetAllQueries = async(request, response) => {
    try {
        const queries = await QueryModel.find()

        if(!queries)
            return response.status(400).json({error: "No queries found"})

        return response.status(200).json(queries)
    } catch (error) {
        console.log("Getting error in fetching user queries: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const GetSpecificQuery = async(request, response) => {
    try {
        const { id } = request.params
        const query = await QueryModel.findById(id)

        if(!query)
            return response.status(400).json({error: "No query found"})

        return response.status(200).json(query)
    } catch (error) {
        console.log("Getting error in fetching specific query: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const ReplyQuery = async(request, response) => {
    try {
        const { id } = request.params
        const { queryReply } = request.body
        const query = await QueryModel.findById(id)

        if(!query)
            return response.status(400).json({error: "No query found"})

        await transporter.sendMail({
            from: `"My Therapy Space" <no-reply@mytherapyspace.com.au>`,
            to: query.email,
            subject: "Response to Your Query – My Therapy Space",
            html: queryReplyEmailTemplate(query.guardianName, queryReply)
        })

        query.reply = queryReply
        query.status = "Answered"
        await query.save();

        return response.status(200).json({message: "Query Reply has been sent successfully"})
    } catch (error) {
        console.log("Getting error in giving reply to query: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const DeleteQuery = async(request, response) => {
    try {
        const { id } = request.params
        const query = await QueryModel.findByIdAndDelete(id)

        if(!query)
            return response.status(400).json({error: "No query found"})

        return response.status(200).json({message: "Query deleted successfully"})
    } catch (error) {
        console.log("Getting error in deleting query: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}