import { gql } from "@apollo/client";

export const GET_CHARACTER = (id) => {
  return gql`
        query {
            character(id: ${id}) {
                id
                name
                status
                species
                type
                gender
                image
                created
                origin {
                    id
                    name
                }
                location {
                    id
                    name
                }
                episode {
                    id
                    name
                }
            }
        }
    `;
};

export const GET_CHARACTERS = (page) => {
  return gql`
        query {
        characters(page: ${page}) {
            info {
            count
            }
            results {
            name
            image
            id
            }
        }
        }
    `;
};
