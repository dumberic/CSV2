import React from 'react';
import Page from 'base-page';
import Table from 'components/Table';
import DataSource from 'components/DataSource';

class Module extends Page {

  getConfig1 () {
    return {
      dataSource: new DataSource({transport:{read:'/api/devices/statu/list?subType=101101'}}),
      title: '水表',
      checkable: false,
      pagination: {show:true,pageSize:10},
      columns: [
        {title:'设备名称',name:'name'},
        {title:'区域',name:'location',parse:(value,data)=>{let show='';if(data.location1){show=data.location1;if(data.location2){show+=' '+data.location2;if(data.location3){show+=' '+data.location3}}}return show}},
        {title:'用水总量(m³)',name:'',parse:(value,data)=>{let show='0';if(data.deviceStatu){show=data.deviceStatu.waterValue}return show}},
        {title:'漏水告警',name:'',parse:(value,data)=>{let show='正常';if(data.deviceStatu){if(data.deviceStatu.leakage){show='漏水'}}return show}},
        {title:'电池状态',name:'',parse:(value,data)=>{let show='正常';return show}},
        {title:'剩余电量(%)',name:'',parse:(value,data)=>{let show='99%';return show}},
        {title:'上报时间',name:'',parse:(value,data)=>{let ct=data.deviceStatu.currentTime;let show=ct?ct:data.currentTime;return show}}
      ]
    }
  }

  getConfig2 () {
    return {
      dataSource: new DataSource({transport:{read:'/api/devices/statu/list?subType=101102'}}),
      title: '电表',
      checkable: false,
      pagination: {show:true,pageSize:10},
      columns: [
        {title:'设备名称',name:'name'},
        {title:'区域',name:'location',parse:(value,data)=>{let show='';if(data.location1){show=data.location1;if(data.location2){show+=' '+data.location2;if(data.location3){show+=' '+data.location3}}}return show}},
        {title:'用电总量(KW/H)',name:'',parse:(value,data)=>{let show='0';if(data.deviceStatu){show=data.deviceStatu.consumption}return show}},
        {title:'当前功率(W)',name:'',parse:(value,data)=>{let show='0';if(data.deviceStatu){show=data.deviceStatu.activePower}return show}},
        {title:'当前电压(V)',name:'',parse:(value,data)=>{let show='0';if(data.deviceStatu){show=data.deviceStatu.devV}return show}},
        {title:'当前电流(A)',name:'',parse:(value,data)=>{let show='0';if(data.deviceStatu){show=data.deviceStatu.devI}return show}},
        {title:'漏电告警',name:'',parse:(value,data)=>{let show='正常';if(data.deviceStatu){if(data.deviceStatu.leakage){show='漏电'}}return show}},
        {title:'上报时间',name:'',parse:(value,data)=>{let ct=data.deviceStatu.currentTime;let show=ct?ct:data.currentTime;return show}}
      ]
    }
  }

  getConfig3 () {
    return {
      dataSource: new DataSource({transport:{read:'/api/devices/statu/list?subType=101103'}}),
      title: '燃气表',
      checkable: false,
      pagination: {show:true,pageSize:10},
      columns: [
        {title:'设备名称',name:'name'},
        {title:'区域',name:'location',parse:(value,data)=>{let show='';if(data.location1){show=data.location1;if(data.location2){show+=' '+data.location2;if(data.location3){show+=' '+data.location3}}}return show}},
        {title:'燃气总量(m³)',name:'',parse:(value,data)=>{let show='0';if(data.deviceStatu){show=data.deviceStatu.gasValue}return show}},
        {title:'漏气告警',name:'',parse:(value,data)=>{let show='正常';if(data.deviceStatu){if(data.deviceStatu.leakage){show='漏水'}}return show}},
        {title:'电池状态',name:'',parse:(value,data)=>{let show='正常';return show}},
        {title:'剩余电量(%)',name:'',parse:(value,data)=>{let show='99%';return show}},
        {title:'上报时间',name:'',parse:(value,data)=>{let ct=data.deviceStatu.currentTime;let show=ct?ct:data.currentTime;return show}}
      ]
    }
  }

  getConfig4 () {
    return {
      dataSource: new DataSource({transport:{read:'/api/devices/statu/list?subType=101104'}}),
      title: '计量插座',
      checkable: false,
      pagination: {show:true,pageSize:10},
      columns: [
        {title:'设备名称',name:'name'},
        {title:'区域',name:'location',parse:(value,data)=>{let show='';if(data.location1){show=data.location1;if(data.location2){show+=' '+data.location2;if(data.location3){show+=' '+data.location3}}}return show}},
        {title:'用电总量(KW/H)',name:'',parse:(value,data)=>{let show='0';if(data.deviceStatu){show=data.deviceStatu.consumption}return show}},
        {title:'当前功率(W)',name:'',parse:(value,data)=>{let show='0';if(data.deviceStatu){show=data.deviceStatu.activePower}return show}},
        {title:'当前电压(V)',name:'',parse:(value,data)=>{let show='0';if(data.deviceStatu){show=data.deviceStatu.devV}return show}},
        {title:'当前电流(A)',name:'',parse:(value,data)=>{let show='0';if(data.deviceStatu){show=data.deviceStatu.devI}return show}},
        {title:'漏电告警',name:'',parse:(value,data)=>{let show='正常';if(data.deviceStatu){if(data.deviceStatu.leakage){show='漏电'}}return show}},
        {title:'上报时间',name:'',parse:(value,data)=>{let ct=data.deviceStatu.currentTime;let show=ct?ct:data.currentTime;return show}},
        //{command:[{title:'开关',name:'onoff',type:'switch'}]}
      ]
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <Table {...this.getConfig1()} />
        <Table {...this.getConfig2()} />
        <Table {...this.getConfig3()} />
        <Table {...this.getConfig4()} />
      </div>
    )
  }

}

module.exports = Module