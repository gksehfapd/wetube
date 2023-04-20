# Wetube Reloaded

/ -> Home
/join -> Join
/login -> Login
/search -> Search

/users/:id -> See User
/users/logout -> Log Out
/users/edit -> Edit MY Profile
/users/delete -> Delete MY Profile

/videos/:id -> See Video
/videos/:id/edit -> Edit Video
/videos/:id/delete -> Delete Video
/videos/:id/upload -> Upload Video

heroku ps:scale web=0 -> 서버 중지
heroku ps:scale web=1 -> 서버 실행
