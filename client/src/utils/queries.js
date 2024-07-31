import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      title
      content
      photoURL
      photoCaption
      createdAt
    }
  }
`;

export const QUERY_SINGLEPOST = gql`
  query OnePost($onePostId: String!) {
    onePost(id: $onePostId) {
      _id
      title
      summary
      content
      photoURL
      photoCaption
      createdAt
      comments {
        _id
        content
        createdAt
        user {
          _id
          firstName
          lastName
        }
      }
    }
  }
`;

export const QUERY_LEADERS = gql`
  query GetLeaders {
    getLeaders {
      _id
      firstName
      lastName
    }
  }
`;

export const QUERY_MEMBERS = gql`
  query Members {
    members {
      usmsRegNo
      usmsId
      firstName
      lastName
      gender
      club
      workoutGroup
      regYear
      emails
      emailExclude
    }
  }
`;

export const QUERY_WORKOUT_GROUP = gql`
  query WORKOUT_GROUPS {
    members {
      _id
      firstName
      lastName
      club
      workoutGroup
      usmsId
    }
  }
`;

export const QUERY_FEATUREDPHOTOS = gql`
  query GetFeaturedPhotos($page: Int!, $perPage: Int!) {
    getFeaturedPhotos(page: $page, perPage: $perPage) {
      numPhotos
      pages
      flickrURL
      photos {
        id
        caption
        url
        flickrURL
      }
    }
  }
`;

export const QUERY_ALBUMS = gql`
  query GetAlbums($page: Int!, $perPage: Int!) {
    getAlbums(page: $page, perPage: $perPage) {
      numAlbums
      pages
      flickrURL
      album {
        caption
        coverURL
        flickrURL
      }
    }
  }
`;
