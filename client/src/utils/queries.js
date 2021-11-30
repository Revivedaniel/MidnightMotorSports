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
query getModel($name: String!) {
  model(name: $name) {
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
      quantity
    }
  }
}
`;

export const QUERY_CATEGORIES = gql`
query {
  categories {
    _id
    name
  }
}
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($parts: [ID]!) {
    checkout(parts: $parts) {
      session
    }
  }
`;