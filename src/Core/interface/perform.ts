/**
 * 描述演出的接口，主要用于控制演出，而不是执行
 * @interface IPerform
 */
export interface IPerform {
    performName: string,// 演出名称
    duration: number, // 持续时间，单位为ms
    stopFunction: any, // 结束演出的函数
    interruptable : boolean, //演出是否可以被打断
    blockNext:boolean // 演出是否阻塞游戏流程继续
}