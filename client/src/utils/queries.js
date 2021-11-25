import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query getUser{
        user {
            _id
            firstName
            lastName
            email
        }
    }
`;

export const QUERY_MODEL = gql`
    query getModel($_id: ID!) {
        model(_id: $_id) {
            name
            parts {
                _id
                name
                description
                image
                price
                year
                category {
                    _id
                    name
                }
            }
        }
    }
`;