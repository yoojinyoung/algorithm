class UserData {
  report = new Set();
  reportedBy = new Set();
  successfulReportCount = 0;
}

function getIntersection(set1, set2) {
  return new Set([...set1].filter((element) => set2.has(element)));
}

function solution(ids, reports, k) {
  const users = new Map();
  ids.forEach((id) => users.set(id, new UserData()));
  reports.forEach((r) => {
    const data = r.split(" ");
    const reporter = data[0];
    const reportee = data[1];
    users.get(reporter).report.add(reportee);
    users.get(reportee).reportedBy.add(reporter);
  });

  const bannedUserIds = new Set(
    ids.filter((id) => users.get(id).reportedBy.size >= k)
  );

  const answer = ids.map(
    (id) => getIntersection(users.get(id).report, bannedUserIds).size
  );

  return answer;
}

module.exports = solution;
