import Ember from 'ember';

export default Ember.Component.extend({
  commands: "",
  sumOfRealSectorIds: 0,
  constructRoom: function(roomString) {
    // pualyuhapvuhs-ibuuf-zhslz-227[uhalp]
    let workingString = roomString;
    let checksum = workingString.substring(workingString.search(/\[[a-z]+\]/));
    workingString = workingString.replace(checksum, "");
    let sectorId = parseInt(workingString.substring(workingString.search(/[0-9]+\b/)));
    workingString = workingString.replace("-" + sectorId, "");
    return {"encryption": workingString, "checksum": checksum, "sectorId": sectorId, "valid": 1};
  },
  validateRoom: function(room) {
    var charCountArray = Ember.A([]);
    let charArray = room.encryption.replace(/-/g, "").split("");
    for (let i = 0; i < charArray.length; i++) {
      let find = charCountArray.findBy("letter", charArray[i]);
      if (!find) {
        charCountArray.push({"letter": charArray[i], "count": 1});
      } else {
        find.count = find.count + 1;
      }
    }
    let x = function compare(a,b) {
      if (a.count > b.count) {
        return -1;
      } else if (a.count === b.count && a.letter < b.letter) {
        return -1;
      } else {
        return 1;
      }
    };
    let sortedArray = charCountArray.sort(x);
    // let sortedArray = Ember.computed.sort(charCountArray, ['count:desc', 'letter']);
    // charCountArray = charCountArray.sortBy("count", "letter");
    let checksumValues = room.checksum.replace(/(\[|\])/g, "").split("");
    for (let i = 0; i < checksumValues.length; i++) {
      let char = checksumValues[i];
      if (char !== sortedArray[i].letter) {
        room.valid = 0;
      }
    }
    // loop through encryp chars, count occurences of each (make into an array)
    // sort array by count, alpha
    // compare, in order of checksum
    // mark (in)valid
    return room;
  },
  // compare: function(a, b) {
  //   debugger;
  //   if (a.count > b.count) {
  //     return 1;
  //   } else if (a.count === b.count && a.letter < b.letter) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // },
  actions: {
    solve() {
      let potentialRooms = this.get('commands').split(/\n/);
      potentialRooms.forEach((potentialRoomString) => {
        //do stuff!
        let room = this.get('constructRoom')(potentialRoomString);
        room = this.get('validateRoom')(room);
        if (room.valid) {
          this.set('sumOfRealSectorIds', this.get('sumOfRealSectorIds') + room.sectorId);
        }
      });
    }
  }
});
