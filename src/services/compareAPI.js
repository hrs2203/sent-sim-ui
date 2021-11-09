import axios from "axios";

const server_api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
})

export async function compareSentences(sent1, sent2, uid) {
  if ((sent1.length === 0) || (sent2.length === 0)) {
    return [];
  }
  const compare_res = await server_api.post("compare",{
    "sentences1": sent1,
    "sentences2": sent2,
    "user_id": uid
  })
  if (compare_res.data.status === 400) {
    return []
  }
  return compare_res.data.data
}

export function formatData(sent1, sent2, compare_res) {
  if ((sent1.length === 0) || (sent2.length === 0) || (compare_res.length === 0)) {
    return {};
  }
  const result = {};
  for (let i = 0; i < sent1.length; i++) {
    result[sent1[i]] = sent2.map((x, j) => [x, compare_res[i][j]]).sort((a,b) => a[1]>b[1] ? -1 : 1);
  }
  return result;
}