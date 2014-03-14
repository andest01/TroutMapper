define(function (require) {
    'use strict';

    var t = [
        {
            "gid":1,
            "objectid":24913,
            "kittle_nbr":"H-001-030-018-007",
            "kittle_nam":"Harrigan Creek",
            "route_mi":0.547000000000,
            "length_mi":0.547000000000,
            "trout_flag":1,
            "publicLand":[
                {
                    "start":0.0,
                    "stop":0.2,
                    "type":"State Park"
                },
                {
                    "start":0.22,
                    "stop":0.33,
                    "type":"WMA"
                },
                {
                    "start":0.335,
                    "stop":0.36,
                    "type":"Easement"
                },
                {
                    "start":0.6,
                    "stop":0.9,
                    "type":"Easement"
                },
                {
                    "start":0.92,
                    "stop":1.0,
                    "type":"Easement"
                }
            ],
            "restrictions":[
                {
                    "start":0.0,
                    "stop":0.2,
                    "restriction":{
                        "summary":"12-16 inch no harvest. No Bait.",
                        "officialText":"Lorem ipusm dolar set amet yada yada keeps going until it wraps",
                        "isAnglingRestriction":true,
                        "isHarvestRestriction":true
                    }
                },
                {
                    "start":0.8,
                    "stop":1.0,
                    "restriction":{
                        "summary":"Fish sanctuary. Harvest permitted only between July 1st and August 31st.",
                        "officialText":"Lorem ipusm dolar set amet yada yada keeps going until it wraps a few times and maybe some more",
                        "isAnglingRestriction":true
                    }
                }
            ],
            "species":[
                {
                    "id":"3",
                    "name":"Brook Trout",
                    "isStocked":false
                },
                {
                    "id":"2",
                    "name":"Rainbow Trout",
                    "isStocked":true
                },
                {
                    "id":"1",
                    "name":"Brown Trout",
                    "isStocked":false
                }
            ],
            "message": "Flood"
        },
        {
            "gid":2,
            "objectid":24914,
            "kittle_nbr":"H-001-030-023-002-003",
            "kittle_nam":"Stony Brook",
            "route_mi":8.33000000000,
            "length_mi":8.33000000000,
            "trout_flag":1,
            "publicLand":[
                {
                    "start":0.0,
                    "stop":0.2,
                    "type":"State Park"
                },
                {
                    "start":0.22,
                    "stop":0.33,
                    "type":"WMA"
                },
                {
                    "start":0.335,
                    "stop":0.36,
                    "type":"Easement"
                },
                {
                    "start":0.6,
                    "stop":0.9,
                    "type":"Easement"
                },
                {
                    "start":0.92,
                    "stop":1.0,
                    "type":"Easement"
                }
            ],
            "restrictions":[
                {
                    "start":0.0,
                    "stop":0.2,
                    "restriction":{
                        "summary":"12-16 inch no harvest. No Bait.",
                        "officialText":"Lorem ipusm dolar set amet yada yada keeps going until it wraps",
                        "isAnglingRestriction":true,
                        "isHarvestRestriction":true
                    }
                },
                {
                    "start":0.8,
                    "stop":1.0,
                    "restriction":{
                        "summary":"Fish sanctuary. Harvest permitted only between July 1st and August 31st.",
                        "officialText":"Lorem ipusm dolar set amet yada yada keeps going until it wraps a few times and maybe some more",
                        "isAnglingRestriction":true
                    }
                }
            ],
            "species":[
                {
                    "id":"3",
                    "name":"Brook Trout",
                    "isStocked":false
                },
                {
                    "id":"2",
                    "name":"Rainbow Trout",
                    "isStocked":true
                },
                {
                    "id":"1",
                    "name":"Brown Trout",
                    "isStocked":false
                }
            ],
            "message": "Dry"
        }
    ];

    return t;
});