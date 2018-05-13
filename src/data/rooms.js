const rooms = [
  {
    id: "rm-001-001",
    exhibition: "台北电脑展",
    isOfficial: true,
    online: 120,
    total: 333,
    messages: 999,
    lastMessage: "xxxx xx vDSEF BBBB DDD",
    desc: "XXXXX XXXXX XXXXX XXXXXXX XXXXXX XXXXXX XXXX",
    createdAt: "2018-06-01 12:12:44"
  },
  {
    id: "rm-001-002",
    exhibition: "台北电脑展",
    isOfficial: true,
    online: 120,
    total: 333,
    messages: 999,
    lastMessage: "xxxx xx vDSEF BBBB DDD",
    desc: "XXXXX XXXXX XXXXX XXXXXXX XXXXXX XXXXXX XXXX",
    createdAt: "2018-06-01 12:12:44"
  },
  {
    id: "rm-001-003",
    exhibition: "台北电脑展",
    isOfficial: false,
    online: 120,
    total: 333,
    messages: 999,
    lastMessage: "xxxx xx vDSEF BBBB DDD",
    desc: "XXXXX XXXXX XXXXX XXXXXXX XXXXXX XXXXXX XXXX",
    createdAt: "2018-06-01 12:12:44"
  },
  {
    id: "rm-001-004",
    exhibition: "台北电脑展",
    isOfficial: false,
    online: 120,
    total: 333,
    messages: 999,
    lastMessage: "xxxx xx vDSEF BBBB DDD",
    desc: "XXXXX XXXXX XXXXX XXXXXXX XXXXXX XXXXXX XXXX",
    createdAt: "2018-06-01 12:12:44"
  },
  {
    id: "rm-001-005",
    exhibition: "台北电脑展",
    isOfficial: false,
    online: 120,
    total: 333,
    messages: 999,
    lastMessage: "xxxx xx vDSEF BBBB DDD",
    desc: "XXXXX XXXXX XXXXX XXXXXXX XXXXXX XXXXXX XXXX",
    createdAt: "2018-06-01 12:12:44"
  },
  {
    id: "rm-001-006",
    exhibition: "台北电脑展",
    isOfficial: false,
    online: 120,
    total: 333,
    messages: 999,
    lastMessage: "xxxx xx vDSEF BBBB DDD",
    desc: "XXXXX XXXXX XXXXX XXXXXXX XXXXXX XXXXXX XXXX",
    createdAt: "2018-06-01 12:12:44"
  },
  {
    id: "rm-001-007",
    exhibition: "台北电脑展",
    isOfficial: false,
    online: 120,
    total: 333,
    messages: 999,
    lastMessage: "xxxx xx vDSEF BBBB DDD",
    desc: "XXXXX XXXXX XXXXX XXXXXXX XXXXXX XXXXXX XXXX",
    createdAt: "2018-06-01 12:12:44"
  },
  {
    id: "rm-001-008",
    exhibition: "台北电脑展",
    isOfficial: false,
    online: 120,
    total: 333,
    messages: 999,
    lastMessage: "xxxx xx vDSEF BBBB DDD",
    desc: "XXXXX XXXXX XXXXX XXXXXXX XXXXXX XXXXXX XXXX",
    createdAt: "2018-06-01 12:12:44"
  },
  {
    id: "rm-001-009",
    exhibition: "台北电脑展",
    isOfficial: false,
    online: 120,
    total: 333,
    messages: 999,
    lastMessage: "xxxx xx vDSEF BBBB DDD",
    desc: "XXXXX XXXXX XXXXX XXXXXXX XXXXXX XXXXXX XXXX",
    createdAt: "2018-06-01 12:12:44"
  },
  {
    id: "rm-001-010",
    exhibition: "台北电脑展",
    isOfficial: false,
    online: 120,
    total: 333,
    messages: 999,
    lastMessage: "xxxx xx vDSEF BBBB DDD",
    desc: "XXXXX XXXXX XXXXX XXXXXXX XXXXXX XXXXXX XXXX",
    createdAt: "2018-06-01 12:12:44"
  },
  {
    id: "rm-001-011",
    exhibition: "台北电脑展",
    isOfficial: false,
    online: 120,
    total: 333,
    messages: 999,
    lastMessage: "xxxx xx vDSEF BBBB DDD",
    desc: "XXXXX XXXXX XXXXX XXXXXXX XXXXXX XXXXXX XXXX",
    createdAt: "2018-06-01 12:12:44"
  },
  {
    id: "rm-001-012",
    exhibition: "台北电脑展",
    isOfficial: false,
    online: 120,
    total: 333,
    messages: 999,
    lastMessage: "xxxx xx vDSEF BBBB DDD",
    desc: "XXXXX XXXXX XXXXX XXXXXXX XXXXXX XXXXXX XXXX",
    createdAt: "2018-06-01 12:12:44"
  },
  {
    id: "rm-001-013",
    exhibition: "台北电脑展",
    isOfficial: false,
    online: 120,
    total: 333,
    messages: 999,
    lastMessage: "xxxx xx vDSEF BBBB DDD",
    desc: "XXXXX XXXXX XXXXX XXXXXXX XXXXXX XXXXXX XXXX",
    createdAt: "2018-06-01 12:12:44"
  },
  {
    id: "rm-001-014",
    exhibition: "台北电脑展",
    isOfficial: false,
    online: 120,
    total: 333,
    messages: 999,
    lastMessage: "xxxx xx vDSEF BBBB DDD",
    desc: "XXXXX XXXXX XXXXX XXXXXXX XXXXXX XXXXXX XXXX",
    createdAt: "2018-06-01 12:12:44"
  },
  {
    id: "rm-001-015",
    exhibition: "台北电脑展",
    isOfficial: false,
    online: 120,
    total: 333,
    messages: 999,
    lastMessage: "xxxx xx vDSEF BBBB DDD",
    desc: "XXXXX XXXXX XXXXX XXXXXXX XXXXXX XXXXXX XXXX",
    createdAt: "2018-06-01 12:12:44"
  },
  {
    id: "rm-001-016",
    exhibition: "台北电脑展",
    isOfficial: false,
    online: 120,
    total: 333,
    messages: 999,
    lastMessage: "xxxx xx vDSEF BBBB DDD",
    desc: "XXXXX XXXXX XXXXX XXXXXXX XXXXXX XXXXXX XXXX",
    createdAt: "2018-06-01 12:12:44"
  },
  {
    id: "rm-001-017",
    exhibition: "台北电脑展",
    isOfficial: false,
    online: 120,
    total: 333,
    messages: 999,
    lastMessage: "xxxx xx vDSEF BBBB DDD",
    desc: "XXXXX XXXXX XXXXX XXXXXXX XXXXXX XXXXXX XXXX",
    createdAt: "2018-06-01 12:12:44"
  },
  {
    id: "rm-001-018",
    exhibition: "台北电脑展",
    isOfficial: false,
    online: 120,
    total: 333,
    messages: 999,
    lastMessage: "xxxx xx vDSEF BBBB DDD",
    desc: "XXXXX XXXXX XXXXX XXXXXXX XXXXXX XXXXXX XXXX",
    createdAt: "2018-06-01 12:12:44"
  }
];

export default rooms;
