import Ember from 'ember';
import SeventhStar from './seventh-star';

export default SeventhStar.extend({
  realRooms: Ember.A([]),
  northPoleSectorId: "",
  decryptName: function(room) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let alphaList = alpha.split("");
    let encryptionList = room.encryption.split("");
    let sectorId = room.sectorId;
    let decryptList = Ember.A([]);
    for (let z = 0; z < encryptionList.length; z++) {
      let letter = encryptionList[z];
      // debugger;
      if (letter !== "-") {
        let letterPos = alpha.search(letter);
        for (let i = 0; i < sectorId; i++) {
          if (letterPos === 25) {
            letterPos = 0;
          } else {
            letterPos++;
          }
        }
        decryptList.push(alphaList[letterPos]);
      } else {
        decryptList.push(" ");
      }
    }
    return decryptList.toString().replace(/,/g, "");
  },
  actions: {
    solve() {
      let potentialRooms = this.get('commands').split(/\n/);
      potentialRooms.forEach((potentialRoomString) => {
        //do stuff!
        let room = this.get('constructRoom')(potentialRoomString);
        room = this.get('validateRoom')(room);
        if (room.valid) {
          this.get('realRooms').push(room);
        }
      });
      let realRooms = this.get('realRooms');
      realRooms.forEach((room) => {
        room["decryption"] = this.get('decryptName')(room);
        if (room.decryption.search("north") >= 0) {
          this.set('northPoleSectorId', room.sectorId);
        }
      });
    }
  }
});
