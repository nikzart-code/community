

## Firebase API for PyGrant Eligible Learners

### Overview
This documentation provides an overview and usage guide for the PyGrant Eligible Learners Firebase API. The API fetches and returns learners who are eligible for the PyGrant based on certain criteria.

### Base URL
```
https://asia-south1-pygrant-leaderboard-latest.cloudfunctions.net/
```

### Endpoints

#### 1. Get Eligible Learners

- **URL**: `/getEligibleLearners`
- **Method**: `GET`
- **URL Params**:
  - **Required**:
    - `fromDate=[string]` (format: YYYY-MM-DD)
    - `toDate=[string]` (format: YYYY-MM-DD)
- **Success Response**:
  - **Code**: `200`
  - **Content**:
    ```json
    [
      {
        "id": "learnerId",
        "name": "learnerName",
        "email": "learnerEmail",
        "score": "finalAssessmentScore",
        "institute": "Name of institution",
        "department": "Branch/Department"
      },
      ...
    ]
    ```
- **Error Response**:
  - **Code**: `500 INTERNAL SERVER ERROR`
  - **Content**: `'Internal server error.'`

##### Usage Example

To get the eligible learners for the PyGrant between January 1, 2023, and August 1, 2023:

```http
GET https://asia-south1-pygrant-leaderboard-latest.cloudfunctions.net/getEligibleLearners?fromDate=2023-01-01&toDate=2023-08-01
```

### Notes

- The API fetches all active learners first, then fetches details for each learner and determines eligibility based on predefined criteria.
- If the API encounters a rate limit error from the Ongraphy API while fetching details, it will wait for 2 seconds and retry. It will make up to 3 retry attempts.

