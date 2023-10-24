# LIVE SERVER: Error Detection approach
## V1.0
the backend monitors for any change in the html by comparing digests of the file across the time intervals
if any change is detected the backend, triggers a response
### problems:
- The app doesn't monitor files dependencies
    e.g. if monitoring a html, it doesn't detect a change in css and js that are linked to it
- The app cannot resend the update file
