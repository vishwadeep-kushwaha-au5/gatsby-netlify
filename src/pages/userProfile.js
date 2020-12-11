import React from 'react'
import Link from 'gatsby-link'

const IndexPage = (props) => {
    const users = props.data.allRandomUser.edges;

    return (
        <div>
            {users.map((user, i) => {
                const userData = user.node;
                return (
                    <div key={i}>
                        <p>Name: {userData.name.first}</p>
                        <img src={userData.picture.medium} />
                    </div>
                )
            })}
        </div>
    );
};

export default IndexPage

export const query = graphql`
  query RandomUserQuery {
    allRandomUser {
      edges {
        node {
          gender
          name {
            title
            first
            last
          }
          picture {
            large
            medium
            thumbnail
          }
        }
      }
    }
  }
`;