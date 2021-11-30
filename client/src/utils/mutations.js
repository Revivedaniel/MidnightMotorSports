import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
        addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
        updateUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
            _id
            firstName
            lastName
            email
        }
    }
`;

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      parts {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;