define(['../app'], function() {
  return angular.module('services', [])
  .factory('Order', function() {
    var slides =[];
    var messages;
    var education;
    messages = {
      provinces: ['北京', '天津', '福建'],
      cities: ['福州', '厦门', '泉州'],
      branch: ['台江支行营业厅----台江区下杭路52号',
        '仓山支行营业厅----仓山区六一南路121号',
        '鼓楼支行营业厅----鼓楼区五四路157号'],
       };
    basemessages={
      education :[ "研究生及以上", "大学本科", "大学专科", "高中/中专及以下"],
      marriage:["未婚" , "已婚有子女" , "已婚无子女" , "其他"],
      job:  ["公务员","医生","教师","其他事","律师","企业员(国有企业)","企业员(三资企业)","企业员(民营企业)","军人","学生","个体","其他"],
      industry_category:["公共管理与社会组织", "科研文化卫生教育", "金融电力电信", "邮政交通运输公用", "计算机服务与软件业", "体育娱乐", "工业商业服务业贸易", "其他"],
      post:["厅局级以上(含)","处级","科级","一般干部","总经理级以上(含)","部门经理","职员","其他"],
     professional: ["高级","中级","初级","无"]
    }
    var cards = [
      {image:"http://www.abchina.com/abcpic/xyk/km/201404/W020140421333679796367.jpg",
        name:"漂亮妈妈卡"
      },
      {image:"http://www.abchina.com/abcpic/xyk/km/201312/W020131218510647857407.jpg",
        name:"环球商旅信用卡"
      },
      {image:"http://www.abchina.com/abcpic/xyk/km/201301/W020130130378043825591.jpg",
        name:"金穗悠游世界信用卡"
      },
      {image:"http://www.abchina.com/abcpic/xyk/km/201312/W020131210455007525321.jpg",
        name:"安邦车主信用卡"
      },
      {image: "http://www.abchina.com/abcpic/xyk/km/201403/W020140325348028610207.jpg"
        ,name:"吉祥航空联名IC信用卡"
      },
      { image:"http://www.abchina.com/abcpic/xyk/km/201108/W020110830362258428302.jpg",
        name:"金穗汉庭东方万里行信用卡金卡"},
        { image:"http://www.abchina.com/abcpic/xyk/km/201108/W020110830362631538389.jpg",
          name:"金穗汉庭东方万里行信用卡普卡"},

          {image:"http://www.abchina.com/abcpic/xyk/km/201309/W020130905308480919022.jpg",
            name:"喜羊羊与灰太狼联名卡"}
    ];
    cards.forEach(function callback(element, index) {
      slides.push({
        image: element.image,
        id: index,
        name: element.name
      });
    });
    return {
      messagesOrder: messages,
      basemessagesOrder: basemessages,
      slidesOrder: slides,
    };
  });

});
