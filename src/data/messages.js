const messages = [
  {
    id: "msg-100-01",
    msg: "AAA AAAA AAAAA AAAAAA AAAAAAA AAAAAAAA",
    me: false,
    photo: "https://dummyimage.com/100x100/FF6347/fff",
    createdAt: "2018-06-01 12:12:12",
    name: "YYy NMNM",
    avatar: "http://www.hexatar.com/gallery/thumb/151203_102132_mc445cadf4a.png"
  },
  {
    id: "msg-100-02",
    msg: "AAA AAAA AAAAA AAAAAA AAAAAAA AAAAAAAA",
    me: false,
    createdAt: "2018-06-01 12:12:12",
    name: "YYy NMNM",
    avatar: "http://www.hexatar.com/gallery/thumb/151203_102132_mc445cadf4a.png"
  },
  {
    id: "msg-100-03",
    msg: "AAA AAAA AAAAA AAAAAA",
    me: false,
    createdAt: "2018-06-01 12:12:12",
    name: "YYy NMNM",
    avatar: "http://www.hexatar.com/gallery/thumb/151203_102132_mc445cadf4a.png"
  },
  {
    id: "msg-100-04",
    msg: "AAA AAAA AAAAA AAAAAA AAAAAAA AAAAAAAA",
    me: false,
    photo: "https://dummyimage.com/100x100/FF6347/fff",
    createdAt: "2018-06-01 12:12:12",
    name: "YYy NMNM",
    avatar: "http://www.hexatar.com/gallery/thumb/151203_102132_mc445cadf4a.png"
  },
  {
    id: "msg-100-05",
    msg: "AAA AAAA AAAAA AAAAAA AAAAAAA AAAAAAAA",
    me: false,
    createdAt: "2018-06-01 12:12:12",
    name: "YYy NMNM",
    avatar: "http://www.hexatar.com/gallery/thumb/20151017_f562244a489a53.png"
  },
  {
    id: "msg-100-06",
    msg: "AAA AAAA AAAAA AAAAAA",
    me: false,
    createdAt: "2018-06-01 12:12:12",
    name: "YYy NMNM",
    avatar: "http://www.hexatar.com/gallery/thumb/151104_f51487ec855.png"
  },
  {
    id: "msg-100-07",
    msg: "AAA AAAA AAAAA AAAAAA AAAAAAA AAAAAAAA",
    me: false,
    photo: "https://dummyimage.com/100x100/FF6347/fff",
    createdAt: "2018-06-01 12:12:12",
    name: "YYy NMNM",
    avatar:
      "http://www.hexatar.com/gallery/thumb/180513_065458_fd7d150de98_avatar.png"
  },
  {
    id: "msg-100-08",
    msg: "AAA AAAA AAAAA AAAAAA AAAAAAA AAAAAAAA",
    me: false,
    createdAt: "2018-06-01 12:12:12",
    name: "YYy NMNM",
    avatar:
      "http://www.hexatar.com/gallery/thumb/180513_070146_fe6c10e9d0e_avatar.png"
  },
  {
    id: "msg-100-09",
    msg: "AAA AAAA AAAAA AAAAAA",
    me: false,
    createdAt: "2018-06-01 12:12:12",
    name: "YYy NMNM",
    avatar:
      "http://www.hexatar.com/gallery/thumb/180513_070146_m51f03ece74_avatar.png"
  },
  {
    id: "msg-100-10",
    msg: "AAA AAAA AAAAA AAAAAA AAAAAAA AAAAAAAA",
    me: false,
    photo: "https://dummyimage.com/100x100/FF6347/fff",
    createdAt: "2018-06-01 12:12:12",
    name: "YYy NMNM",
    avatar:
      "http://www.hexatar.com/gallery/thumb/180513_070751_f6e6fadd2cc_avatar.png"
  },
  {
    id: "msg-100-11",
    msg: "AAA AAAA AAAAA AAAAAA AAAAAAA AAAAAAAA",
    me: false,
    createdAt: "2018-06-01 12:12:12",
    name: "YYy NMNM",
    avatar: "http://www.hexatar.com/gallery/thumb/151104_madb20080e2.png"
  },
  {
    id: "msg-100-12",
    msg: "AAA AAAA AAAAA AAAAAA",
    me: false,
    createdAt: "2018-06-01 12:12:12",
    name: "YYy NMNM",
    avatar: "http://www.hexatar.com/gallery/thumb/20151017_f56225b9ca13fd.png"
  },
  {
    id: "msg-100-14",
    msg: "AAA AAAA AAAAA AAAAAA AAAAAAA AAAAAAAA",
    me: false,
    photo: "https://dummyimage.com/100x100/FF6347/fff",
    createdAt: "2018-06-01 12:12:12",
    name: "YYy NMNM",
    avatar: "http://www.hexatar.com/gallery/thumb/20151017_m562197ee1744e.png"
  },
  {
    id: "msg-100-15",
    msg: "AAA AAAA AAAAA AAAAAA AAAAAAA AAAAAAAA",
    me: false,
    createdAt: "2018-06-01 12:12:12",
    name: "YYy NMNM",
    avatar: "http://www.hexatar.com/gallery/thumb/151123_081923_m91b13883e4.png"
  },
  {
    id: "msg-100-16",
    msg: "AAA AAAA AAAAA AAAAAA",
    me: false,
    createdAt: "2018-06-01 12:12:12",
    name: "YYy NMNM",
    avatar: "http://www.hexatar.com/gallery/thumb/151123_044057_m096a8c37c7.png"
  },
  {
    id: "msg-102-01",
    msg: "AAA AAAA AAAAA AAAAAA AAAAAAA AAAAAAAA",
    me: true,
    photo: "https://dummyimage.com/100x100/FF6347/fff",
    createdAt: "2018-06-01 12:12:12",
    name: "YYy NMNM",
    avatar: "http://www.hexatar.com/gallery/thumb/151104_f3e74852d09.png"
  },
  {
    id: "msg-102-02",
    msg: "AAA AAAA AAAAA AAAAAA AAAAAAA AAAAAAAA",
    me: true,
    createdAt: "2018-06-01 12:12:12",
    name: "YYy NMNM",
    avatar: "http://www.hexatar.com/gallery/thumb/151202_112032_mce66bdac65.png"
  },
  {
    id: "msg-102-03",
    msg: "AAA AAAA AAAAA AAAAAA",
    me: true,
    createdAt: "2018-06-01 12:12:12",
    name: "YYy NMNM",
    avatar: "http://www.hexatar.com/gallery/thumb/151202_112032_mce66bdac65.png"
  }
];

export default messages;
