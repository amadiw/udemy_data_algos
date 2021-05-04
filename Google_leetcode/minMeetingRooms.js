const minMeetingRooms = interval => {
  const rooms = []


  //helper function to find a room. if room end time is <= meeting start time, then meeting can use same room
  const findRoom = (rooms, meeting) => {
    for (let i = 0; i < rooms.length; i++) {
      if(rooms[i][1] <= meeting[0]) {
        rooms[i] = meeting
        return
      }
    }
    rooms.push(meeting)
  }

  //sort interval
  interval.sort((a,b)=>a[0]-a[b])
  //iterate through sorted interval and pass curr elem to helper funciton
  for(let i = 0; i < interval.length; i++) {
    let meeting = interval[i]
    findRoom(rooms, meeting)
  }
  return rooms.length
}


console.log(minMeetingRooms([[0,30],[5,10],[15,20]]))//2
