exports.split = str => {
  var comp_arr = [];
  let team_id = str.substring(0, 6);
  let s = str.substring(7).split(',');
  comp_arr.push(team_id);
  for (let i = 0; i < s.length; i++) {
    comp_arr.push(s[i]);
  }
  return comp_arr;
};
