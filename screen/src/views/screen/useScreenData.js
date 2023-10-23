import { onMounted, onUnmounted, ref } from 'vue'
// import { getMapData, getUserData } from '../../api'

const color = ['rgb(116,166,49)', 'rgb(190,245,99)', 'rgb(202,252,137)', 'rgb(251,253,142)']

const userData = ref(
    {
        "userToday": 1508411,
        "userLastDay": 1000000,
        "userLastMonth": 800000,
        "userGrowthLastDay": "50.79",
        "userGrowthLastMonth": "88.49",
        "age": [
            {
                "key": "0-20",
                "value": 247329
            },
            {
                "key": "20-30",
                "value": 446876
            },
            {
                "key": "30-50",
                "value": 667428
            },
            {
                "key": ">50",
                "value": 146778
            }
        ],
        "averageAge": "29.88",
        "totalDevices": 1261639,
        "devices": [
            {
                "key": "Android",
                "value": 486683
            },
            {
                "key": "iOS",
                "value": 437505
            },
            {
                "key": "PC",
                "value": 337451
            }
        ],
        "gender": [
            {
                "key": "male",
                "value": 753516
            },
            {
                "key": "female",
                "value": 754895
            }
        ],
        "rider": {
            "axisX": [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            "orderData": {
                "legend1": "去年骑手月人均接单",
                "legend2": "今年骑手月人均接单",
                "data1": [
                    "330",
                    "420",
                    "560",
                    "450",
                    "610",
                    "890",
                    "720",
                    "610",
                    "580",
                    "750",
                    "770",
                    "600"
                ],
                "data2": [
                    "430",
                    "510",
                    "660",
                    "550",
                    "710",
                    "990",
                    "620",
                    "550",
                    "760",
                    "810",
                    "930",
                    "720"
                ]
            },
            "rateData": {
                "legend1": "去年月新增骑手",
                "legend2": "今年月新增骑手",
                "data1": [
                    "129",
                    "223",
                    "202",
                    "197",
                    "300",
                    "112",
                    "333",
                    "249",
                    "178",
                    "322",
                    "401",
                    "167"
                ],
                "data2": [
                    "179",
                    "263",
                    "282",
                    "297",
                    "330",
                    "344",
                    "222",
                    "299",
                    "190",
                    "455",
                    "566",
                    "233"
                ]
            }
        },
        "category": {
            "data1": {
                "axisX": [
                    "粉面粥店",
                    "简餐便当",
                    "汉堡披萨",
                    "香锅冒菜",
                    "小吃炸串",
                    "地方菜系",
                    "轻食简餐"
                ],
                "data1": [
                    71,
                    11,
                    26,
                    82,
                    98,
                    14,
                    51
                ],
                "data2": [
                    29,
                    89,
                    74,
                    18,
                    2,
                    86,
                    49
                ]
            },
            "data2": {
                "axisX": [
                    "草莓",
                    "甘蔗",
                    "榴莲",
                    "菠萝",
                    "香蕉",
                    "梨",
                    "苹果"
                ],
                "data1": [
                    42,
                    79,
                    76,
                    99,
                    40,
                    93,
                    87
                ],
                "data2": [
                    58,
                    21,
                    24,
                    1,
                    60,
                    7,
                    13
                ]
            }
        },
        "orderGrowthLastDay": "51.23",
        "orderGrowthLastMonth": "89.04",
        "orderLastMonth": 1600000,
        "orderLastDay": 2000000,
        "orderToday": 3024692,
        "orderTrend": [
            620,
            432,
            220,
            534,
            790,
            430,
            220,
            320,
            532,
            320,
            834,
            690,
            530,
            220,
            620
        ],
        "orderUserTrend": [
            410,
            82,
            200,
            334,
            390,
            330,
            220,
            150,
            82,
            200,
            134,
            290,
            330,
            150
        ],
        "orderUserTrendAxis": [
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00"
        ],
        "orderFullYearAxis": [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
        ],
        "orderFullYear": [
            410,
            82,
            200,
            334,
            390,
            330,
            220,
            150,
            82,
            200,
            134,
            290
        ],
        "userFullYearAxis": [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
        ],
        "userFullYear": [
            110,
            120,
            90,
            220,
            175,
            212,
            192,
            95,
            88,
            120,
            250,
            310
        ],
        "orderRank": [
            {
                "no": 1,
                "name": "肯德基",
                "money": "323,234"
            },
            {
                "no": 2,
                "name": "麦当劳",
                "money": "299,132"
            },
            {
                "no": 3,
                "name": "肯德基",
                "money": "283,998"
            },
            {
                "no": 4,
                "name": "海底捞",
                "money": "266,223"
            },
            {
                "no": 5,
                "name": "西贝筱面村",
                "money": "223,445"
            },
            {
                "no": 6,
                "name": "汉堡王",
                "money": "219,663"
            },
            {
                "no": 7,
                "name": "真功夫",
                "money": "200,997"
            }
        ],
        "userRank": [
            {
                "no": 1,
                "name": "麦当劳",
                "money": "211,335"
            },
            {
                "no": 2,
                "name": "肯德基",
                "money": "210,597"
            },
            {
                "no": 3,
                "name": "必胜客",
                "money": "200,998"
            },
            {
                "no": 4,
                "name": "海底捞",
                "money": "199,220"
            },
            {
                "no": 5,
                "name": "西贝筱面村",
                "money": "195,444"
            },
            {
                "no": 6,
                "name": "汉堡王",
                "money": "180,161"
            },
            {
                "no": 7,
                "name": "真功夫",
                "money": "172,995"
            }
        ],
        "salesGrowthLastDay": "61.28",
        "salesGrowthLastMonth": "108.55",
        "salesLastMonth": 23200000,
        "salesLastDay": 30000000,
        "salesToday": 48383500,
        "orderPrice": 19,
        "orderUser": 509157,
        "covertRate": "11.15",
        "returnRate": "5.44",
        "areaSales": [
            {
                "order": "北京 +22%",
                "shop": "北京 +21%",
                "rider": "北京 +19%",
                "newShop": "北京 -20%",
                "avgOrder": "北京 +7%"
            },
            {
                "order": "上海 +18%",
                "shop": "上海 +9%",
                "rider": "上海 +15%",
                "newShop": "上海 +18%",
                "avgOrder": "上海 +8%"
            },
            {
                "order": "广州 -19%",
                "shop": "广州 +22%",
                "rider": "广州 -2%",
                "newShop": "广州 -7%",
                "avgOrder": "广州 +13%"
            },
            {
                "order": "深圳 +9%",
                "shop": "深圳 -9%",
                "rider": "深圳 +15%",
                "newShop": "深圳 +22%",
                "avgOrder": "深圳 +13%"
            },
            {
                "order": "南京 -7%",
                "shop": "南京 -10%",
                "rider": "南京 +11%",
                "newShop": "南京 +16%",
                "avgOrder": "南京 +12%"
            },
            {
                "order": "杭州 +7%",
                "shop": "杭州 -15%",
                "rider": "杭州 -18%",
                "newShop": "杭州 +16%",
                "avgOrder": "杭州 -16%"
            },
            {
                "order": "合肥 -6%",
                "shop": "合肥 -18%",
                "rider": "合肥 -12%",
                "newShop": "合肥 -19%",
                "avgOrder": "合肥 +5%"
            },
            {
                "order": "济南 +22%",
                "shop": "济南 +14%",
                "rider": "济南 +14%",
                "newShop": "济南 -6%",
                "avgOrder": "济南 -21%"
            },
            {
                "order": "太原 -5%",
                "shop": "太原 -16%",
                "rider": "太原 +20%",
                "newShop": "太原 -22%",
                "avgOrder": "太原 +6%"
            },
            {
                "order": "成都 -11%",
                "shop": "成都 +20%",
                "rider": "成都 +21%",
                "newShop": "成都 +13%",
                "avgOrder": "成都 +18%"
            },
            {
                "order": "重庆 +18%",
                "shop": "重庆 +10%",
                "rider": "重庆 -9%",
                "newShop": "重庆 +5%",
                "avgOrder": "重庆 +6%"
            },
            {
                "order": "苏州 +6%",
                "shop": "苏州 -24%",
                "rider": "苏州 -20%",
                "newShop": "苏州 +7%",
                "avgOrder": "苏州 +10%"
            },
            {
                "order": "无锡 +12%",
                "shop": "无锡 +6%",
                "rider": "无锡 -7%",
                "newShop": "无锡 +15%",
                "avgOrder": "无锡 +4%"
            },
            {
                "order": "常州 -13%",
                "shop": "常州 +12%",
                "rider": "常州 +10%",
                "newShop": "常州 -11%",
                "avgOrder": "常州 -22%"
            },
            {
                "order": "温州 +10%",
                "shop": "温州 -18%",
                "rider": "温州 -10%",
                "newShop": "温州 -8%",
                "avgOrder": "温州 +13%"
            },
            {
                "order": "哈尔滨 +15%",
                "shop": "哈尔滨 +5%",
                "rider": "哈尔滨 +20%",
                "newShop": "哈尔滨 +18%",
                "avgOrder": "哈尔滨 +22%"
            },
            {
                "order": "长春 +20%",
                "shop": "长春 -2%",
                "rider": "长春 +11%",
                "newShop": "长春 +5%",
                "avgOrder": "长春 -16%"
            },
            {
                "order": "大连 -23%",
                "shop": "大连 -18%",
                "rider": "大连 +22%",
                "newShop": "大连 -15%",
                "avgOrder": "大连 -16%"
            },
            {
                "order": "沈阳 -13%",
                "shop": "沈阳 +12%",
                "rider": "沈阳 +13%",
                "newShop": "沈阳 -20%",
                "avgOrder": "沈阳 +14%"
            },
            {
                "order": "拉萨 +6%",
                "shop": "拉萨 -2%",
                "rider": "拉萨 +6%",
                "newShop": "拉萨 -16%",
                "avgOrder": "拉萨 -8%"
            },
            {
                "order": "呼和浩特 +17%",
                "shop": "呼和浩特 -15%",
                "rider": "呼和浩特 +17%",
                "newShop": "呼和浩特 +11%",
                "avgOrder": "呼和浩特 -18%"
            },
            {
                "order": "武汉 +19%",
                "shop": "武汉 -20%",
                "rider": "武汉 -18%",
                "newShop": "武汉 +4%",
                "avgOrder": "武汉 -11%"
            },
            {
                "order": "南宁 -9%",
                "shop": "南宁 -10%",
                "rider": "南宁 -6%",
                "newShop": "南宁 +18%",
                "avgOrder": "南宁 +7%"
            }
        ],
        "areaTop": [
            {
                "city": "北京",
                "rate": "+17%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 20,
                        "sales": 356
                    },
                    {
                        "shop": "肯德基",
                        "order": 908,
                        "sales": 15009
                    },
                    {
                        "shop": "麦当劳",
                        "order": 192,
                        "sales": 2365
                    },
                    {
                        "shop": "海底捞",
                        "order": 25,
                        "sales": 496
                    }
                ]
            },
            {
                "city": "上海",
                "rate": "+8%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 483,
                        "sales": 8022
                    },
                    {
                        "shop": "肯德基",
                        "order": 682,
                        "sales": 9357
                    },
                    {
                        "shop": "麦当劳",
                        "order": 825,
                        "sales": 11863
                    },
                    {
                        "shop": "海底捞",
                        "order": 901,
                        "sales": 15443
                    }
                ]
            },
            {
                "city": "广州",
                "rate": "-16%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 889,
                        "sales": 17602
                    },
                    {
                        "shop": "肯德基",
                        "order": 147,
                        "sales": 2134
                    },
                    {
                        "shop": "麦当劳",
                        "order": 298,
                        "sales": 5158
                    },
                    {
                        "shop": "海底捞",
                        "order": 576,
                        "sales": 9146
                    }
                ]
            },
            {
                "city": "深圳",
                "rate": "+6%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 268,
                        "sales": 4856
                    },
                    {
                        "shop": "肯德基",
                        "order": 995,
                        "sales": 15213
                    },
                    {
                        "shop": "麦当劳",
                        "order": 141,
                        "sales": 2260
                    },
                    {
                        "shop": "海底捞",
                        "order": 748,
                        "sales": 8983
                    }
                ]
            },
            {
                "city": "南京",
                "rate": "+17%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 546,
                        "sales": 10898
                    },
                    {
                        "shop": "肯德基",
                        "order": 807,
                        "sales": 8618
                    },
                    {
                        "shop": "麦当劳",
                        "order": 987,
                        "sales": 16611
                    },
                    {
                        "shop": "海底捞",
                        "order": 283,
                        "sales": 4239
                    }
                ]
            },
            {
                "city": "杭州",
                "rate": "-15%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 304,
                        "sales": 5365
                    },
                    {
                        "shop": "肯德基",
                        "order": 483,
                        "sales": 8346
                    },
                    {
                        "shop": "麦当劳",
                        "order": 445,
                        "sales": 4708
                    },
                    {
                        "shop": "海底捞",
                        "order": 353,
                        "sales": 6438
                    }
                ]
            },
            {
                "city": "合肥",
                "rate": "+16%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 419,
                        "sales": 4416
                    },
                    {
                        "shop": "肯德基",
                        "order": 257,
                        "sales": 2634
                    },
                    {
                        "shop": "麦当劳",
                        "order": 887,
                        "sales": 12684
                    },
                    {
                        "shop": "海底捞",
                        "order": 414,
                        "sales": 5332
                    }
                ]
            },
            {
                "city": "济南",
                "rate": "-14%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 199,
                        "sales": 3699
                    },
                    {
                        "shop": "肯德基",
                        "order": 76,
                        "sales": 1121
                    },
                    {
                        "shop": "麦当劳",
                        "order": 297,
                        "sales": 5075
                    },
                    {
                        "shop": "海底捞",
                        "order": 687,
                        "sales": 8731
                    }
                ]
            },
            {
                "city": "太原",
                "rate": "-10%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 194,
                        "sales": 2768
                    },
                    {
                        "shop": "肯德基",
                        "order": 589,
                        "sales": 11715
                    },
                    {
                        "shop": "麦当劳",
                        "order": 447,
                        "sales": 4992
                    },
                    {
                        "shop": "海底捞",
                        "order": 346,
                        "sales": 5688
                    }
                ]
            },
            {
                "city": "成都",
                "rate": "+14%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 990,
                        "sales": 17136
                    },
                    {
                        "shop": "肯德基",
                        "order": 73,
                        "sales": 1113
                    },
                    {
                        "shop": "麦当劳",
                        "order": 964,
                        "sales": 12705
                    },
                    {
                        "shop": "海底捞",
                        "order": 892,
                        "sales": 14316
                    }
                ]
            },
            {
                "city": "重庆",
                "rate": "+11%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 540,
                        "sales": 7862
                    },
                    {
                        "shop": "肯德基",
                        "order": 108,
                        "sales": 1530
                    },
                    {
                        "shop": "麦当劳",
                        "order": 259,
                        "sales": 3361
                    },
                    {
                        "shop": "海底捞",
                        "order": 240,
                        "sales": 4324
                    }
                ]
            },
            {
                "city": "苏州",
                "rate": "-2%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 543,
                        "sales": 9833
                    },
                    {
                        "shop": "肯德基",
                        "order": 430,
                        "sales": 8045
                    },
                    {
                        "shop": "麦当劳",
                        "order": 430,
                        "sales": 8041
                    },
                    {
                        "shop": "海底捞",
                        "order": 145,
                        "sales": 1492
                    }
                ]
            },
            {
                "city": "无锡",
                "rate": "+19%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 280,
                        "sales": 3575
                    },
                    {
                        "shop": "肯德基",
                        "order": 661,
                        "sales": 9267
                    },
                    {
                        "shop": "麦当劳",
                        "order": 510,
                        "sales": 6920
                    },
                    {
                        "shop": "海底捞",
                        "order": 963,
                        "sales": 18691
                    }
                ]
            },
            {
                "city": "常州",
                "rate": "-14%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 249,
                        "sales": 3727
                    },
                    {
                        "shop": "肯德基",
                        "order": 117,
                        "sales": 1662
                    },
                    {
                        "shop": "麦当劳",
                        "order": 969,
                        "sales": 16153
                    },
                    {
                        "shop": "海底捞",
                        "order": 195,
                        "sales": 2882
                    }
                ]
            },
            {
                "city": "温州",
                "rate": "-20%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 951,
                        "sales": 14055
                    },
                    {
                        "shop": "肯德基",
                        "order": 688,
                        "sales": 10271
                    },
                    {
                        "shop": "麦当劳",
                        "order": 72,
                        "sales": 797
                    },
                    {
                        "shop": "海底捞",
                        "order": 639,
                        "sales": 11329
                    }
                ]
            },
            {
                "city": "哈尔滨",
                "rate": "+15%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 326,
                        "sales": 5929
                    },
                    {
                        "shop": "肯德基",
                        "order": 624,
                        "sales": 6770
                    },
                    {
                        "shop": "麦当劳",
                        "order": 31,
                        "sales": 336
                    },
                    {
                        "shop": "海底捞",
                        "order": 850,
                        "sales": 13192
                    }
                ]
            },
            {
                "city": "长春",
                "rate": "-3%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 530,
                        "sales": 6126
                    },
                    {
                        "shop": "肯德基",
                        "order": 203,
                        "sales": 2379
                    },
                    {
                        "shop": "麦当劳",
                        "order": 740,
                        "sales": 8613
                    },
                    {
                        "shop": "海底捞",
                        "order": 775,
                        "sales": 8494
                    }
                ]
            },
            {
                "city": "大连",
                "rate": "+9%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 284,
                        "sales": 3564
                    },
                    {
                        "shop": "肯德基",
                        "order": 258,
                        "sales": 2644
                    },
                    {
                        "shop": "麦当劳",
                        "order": 717,
                        "sales": 8862
                    },
                    {
                        "shop": "海底捞",
                        "order": 687,
                        "sales": 10538
                    }
                ]
            },
            {
                "city": "沈阳",
                "rate": "+11%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 382,
                        "sales": 4958
                    },
                    {
                        "shop": "肯德基",
                        "order": 287,
                        "sales": 4500
                    },
                    {
                        "shop": "麦当劳",
                        "order": 232,
                        "sales": 3187
                    },
                    {
                        "shop": "海底捞",
                        "order": 335,
                        "sales": 6060
                    }
                ]
            },
            {
                "city": "拉萨",
                "rate": "+9%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 364,
                        "sales": 4655
                    },
                    {
                        "shop": "肯德基",
                        "order": 229,
                        "sales": 2393
                    },
                    {
                        "shop": "麦当劳",
                        "order": 247,
                        "sales": 4626
                    },
                    {
                        "shop": "海底捞",
                        "order": 309,
                        "sales": 3105
                    }
                ]
            },
            {
                "city": "呼和浩特",
                "rate": "+14%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 644,
                        "sales": 11907
                    },
                    {
                        "shop": "肯德基",
                        "order": 756,
                        "sales": 9926
                    },
                    {
                        "shop": "麦当劳",
                        "order": 852,
                        "sales": 11655
                    },
                    {
                        "shop": "海底捞",
                        "order": 966,
                        "sales": 12442
                    }
                ]
            },
            {
                "city": "武汉",
                "rate": "-21%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 673,
                        "sales": 9529
                    },
                    {
                        "shop": "肯德基",
                        "order": 49,
                        "sales": 539
                    },
                    {
                        "shop": "麦当劳",
                        "order": 968,
                        "sales": 11887
                    },
                    {
                        "shop": "海底捞",
                        "order": 747,
                        "sales": 9733
                    }
                ]
            },
            {
                "city": "南宁",
                "rate": "+22%",
                "shop": [
                    {
                        "shop": "必胜客",
                        "order": 354,
                        "sales": 4467
                    },
                    {
                        "shop": "肯德基",
                        "order": 343,
                        "sales": 6348
                    },
                    {
                        "shop": "麦当劳",
                        "order": 584,
                        "sales": 10587
                    },
                    {
                        "shop": "海底捞",
                        "order": 62,
                        "sales": 916
                    }
                ]
            }
        ],
        "realTimeOrder": 591,
        "growthLastDay": "50.84",
        "growthLastMonth": "88.55"
    }
)
const ageData = ref([])

userData.value.age.forEach((item, index) => {
    if (ageData.value[index]) {
        ageData.value[index] = {
            startValue: ageData.value[index].value,
            value: item.value,
            axis: item.key,
            color: color[index]
        }
        ageData.value = [...ageData.value]
    } else {
        ageData.value.push({
            startValue: 0,
            value: item.value,
            axis: item.key,
            color: color[index]
        })
    }
})

export {
    userData,
    ageData
}