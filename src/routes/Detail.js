import {useParams} from "react-router-dom";

function Detail(props){
    let {id} = useParams();
    let findGoods = props.shoes.find(function (x){
        return x.id == id;
    })
    let i = Number(findGoods.id)+1;
    console.log(i);
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={'https://codingapple1.github.io/shop/shoes' + i + '.jpg'} width="80%"/>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findGoods.title}</h4>
                    <p>{findGoods.content}</p>
                    <p>{findGoods.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;