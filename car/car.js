// 1.funnction car(distance) 만들기 //
// car 안에 turnOn, turnOff, drive //
// 최대거리 40KM => if(distance >= 40) turnOff
// 1km단위로 콘솔이뜬다 --? 어케만듬?//
// 1. turnOn ==> console.log("시동이 걸렸습니다.")//
// 2. turnOff => console.log("시동이 꺼졌습니다.")//
// 3. drive중이라면 => 1km마다 콘솔뜸//
// ==> for 문안에 if문?//
// 4. 목적지도착시 => console.log("주행이 완료되었습니다.")//
// 5. 목표거리가 40km이상시
// ==> console.log("안전위험으로 시동을 종료했습니다") & turnOff//
// 6. if !trunOn => !drive
// 7. if turnOn => !turnOn
// 8. if turnOff =? !turnOff

function car(distance){
    function turnOn(){
        console.log("시동이 걸렸습니다.")  
    }

    function turnOff(){
        console.log("시동이 꺼졌습니다.")
    }

    function drive(distance){
        turnOn();
        for(i=0; i<=distance; i++){
            console.log((distance-i))
            if((distance-i) === 0){
                console.log("주행이 완료되었습니다.")
                turnOff()
            }
        }
    }
    
    if(distance >= 40){
        console.log("안전위험으로 시동을 종료했습니다")
        turnOff()
    }else{
        drive(distance)
    }


}   
    car(33)

// 강사님 질문있습니다...
//최종목표 6번에 '시동이 걸리지 않으면 주행할수없습니다' 에대한건
//어떻게 작성해야할지 모르겠습니다 이게 drive함수에 turn on을하라는 의미인지 아니면 초기drive조건에 turn on이 되야만
//drive코드가 작동한다의 구조로 코드를 짜야하는건지.
//목표 7,8은 어떻게 구현해야할지 모르겠습니다 힌트받을수있을까요??
//제가 클로져 디스를 몰라서 못푸는건지 아니면 그냥 답에 접근을 못하는건지 모르겠어요 ㅜㅜ

// 아 정말 궁굼한 질문이하나있습니다.
// 이문제를 내주신게 2주전인데 제가 수업을 다듣고 이제서야 문제를 풀어서 문제에 필요한 내용들을 모두 배운상태로
// 풀어서 수월하게 풀었는데 2주전에 이내용들을 모르는상태에서 내주셧는데 스스로 찾아서 공부하는 시간을갖게 의도하신건가요
// 아니면 문제풀때 필요한 개념들 없이 풀수있는 방법이있엇을까요?? 질문의 의도는 다른방법으로도 이코드를 작성할 방법이있엇는지
// 궁굼합니다. 다른방법이 있엇다면 그방법도 고민해 보고 싶어서요.