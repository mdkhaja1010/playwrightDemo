# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: staffAPICopy.spec.ts >> deleting staff details
- Location: tests\staffAPICopy.spec.ts:192:5

# Error details

```
Error: apiRequestContext.post: connect ECONNREFUSED ::1:8080
Call log:
  - → POST http://localhost:8080/api/staff
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.7922.34 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqdDBKRjFyLWRVN0tiTzFaTTZXcXVLc211U2tLMDhmUEotQnQ3bUkwSWRRIn0.eyJleHAiOjE3OTI0NzE3MzEsImlhdCI6MTc5MjQ3MTQzMSwianRpIjoiYWNiNDg4NzAtNjc1Ni00YjFkLWJkNmUtZjliNjVhZTQ0NzZhIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgxL3JlYWxtcy9teXJlYWxtIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImJiNThkZjcwLWVhMDgtNDJjZi1hODVmLTVmNjA5MTQxZmNkYyIsInR5cCI6IkJlYXJlciIsImF6cCI6Im15Y2xpZW50MSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtbXlyZWFsbSIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJjbGllbnRIb3N0IjoiMTcyLjE3LjAuMSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LW15Y2xpZW50MSIsImNsaWVudEFkZHJlc3MiOiIxNzIuMTcuMC4xIiwiY2xpZW50X2lkIjoibXljbGllbnQxIn0.U0k69l3ROxkrGIRVgw3053OJYOjp_7cBH6drU3JbINX47HQ6n3KZwmIvOW3ATU8G3JndqwrJiy3x1R4gVNeRCKXa5Q7eOfe0am23MPz5srRs9NeZy_I3fro4N_JMKA5XtAAlv58lAhU0t1CCX5eIXcj105alV33pFZChPpEL__o1Eiffyg2VaEyVyI-1rPDtRB98mIzp-9PsRxvKKlE5UDSD1WENOkarPW33pJSCODrSwVQS5ZtwNWk7OCrEuThwj95jhUHaWYLGDmIhyuTJ2V_ZScOR7BtcLfrXpaW5gZ7MZekJHJSUfNha_Q7Y8LmkWdV24fcqnjBvoVVDtfTwPQ
    - Content-Type: application/json
    - content-length: 66

```