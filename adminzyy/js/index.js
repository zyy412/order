function state() {
    var userNick = document.getElementById('user');
    var out = document.getElementById('outLog');
    // var mes = new XMLHttpRequest
    // mes.onreadystatechange = function () {
    //     // if (mes.status == 200 && mes.readyState == 4) {
    //     //     var peo = JSON.parse(mes.responseText);

    //     //     if (peo.code != 1) {
    //     //         alert('您还没有登录！')
    //     //         window.location.href = "http://localhost/dist/"
    //     //     } else if (peo.code ==1) {
    //     //         userNick.innerHTML = peo.name;
    //     //     }
    //     }
    // }
    // mes.open('GET', 'http://localhost/yafgxw/admin', true)
    // mes.send(null)
    out.onclick = function () {
        $.ajax({
            url: "http://localhost/yafgxw/loginout",
            type: "get",
            success: function (data) {
                
                    window.location.href = "http://localhost/order/login.html"

            }
        })
    }
}

function tableMes() {
    let mesTable1 = document.querySelectorAll('.mesTable')[0]
    let tableBodies = document.querySelectorAll('.tableBodies')[0]
    tableBodies.innerHTML = ''
    var xhr = new XMLHttpRequest
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            var mes = JSON.parse(xhr.responseText);
            console.log(mes)


                for (let i = 0; i < mes.length; i++) {
                    var oTr = document.createElement('tr');
                    var oTd = document.createElement('td');
                    oTd.innerHTML = mes[i][0];
                    oTr.appendChild(oTd);
                    var oTd = document.createElement('td');
                    oTd.innerHTML = mes[i][1];
                    oTr.appendChild(oTd);
                    var oTd = document.createElement('td');
                    oTd.innerHTML = mes[i][2];
                    oTr.appendChild(oTd); 
                    var oTd = document.createElement('td');
                    oTd.innerHTML = '<a href="javascript:;">删除</a>'
                    oTr.appendChild(oTd);

                    oTd.getElementsByTagName('a')[0].onclick = function () {
                        $.ajax({
                            url: "http://localhost/order/deleteuser.php",
                            type: "post",
                            data: {
                                uid:mes[i][0]
                            },
                            success: function (data) {
                               
                                    alert('删除成功')
                                    tableMes()
                                
                            }
                        })
                    }
                    tableBodies.appendChild(oTr);
            }
        }
    }
        xhr.open('GET', 'http://localhost/order/selectuser.php', true)
        xhr.send(null)
}

function tableMes2() {
    let goodContent = document.querySelectorAll('.goodContent')
    let tableBodies = document.querySelectorAll('.tableBodies')[1]
    let imgContent = document.querySelector('.imgContent')
    let closeContent = document.querySelectorAll('.closeContent')
    closeContent[0].onclick=function(){
        goodContent[0].style.display='none'
    }
    closeContent[1].onclick=function(){
        goodContent[1].style.display='none'
    }
    let mesContent = document.querySelectorAll('.mesContent')
    tableBodies.innerHTML = ''
    var xhr = new XMLHttpRequest
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            var mes = JSON.parse(xhr.responseText);
            console.log(mes)

                
                for (let i = 0; i < mes.length; i++) {
                    var oTr = document.createElement('tr');
                    var oTd = document.createElement('td');
                    oTd.innerHTML = mes[i][0];
                    oTr.appendChild(oTd);
                    var oTd = document.createElement('td');
                    oTd.innerHTML = mes[i][1];
                    oTr.appendChild(oTd);
                    var oTd = document.createElement('td');
                    oTd.innerHTML = mes[i][2];
                    oTr.appendChild(oTd); 
                    var oTd = document.createElement('td');
                    oTd.innerHTML = mes[i][3];
                    oTr.appendChild(oTd); 
                    var oTd = document.createElement('td');
                    oTd.innerHTML = mes[i][6];
                    oTr.appendChild(oTd); 
                    var oTd = document.createElement('td');
                    oTd.innerHTML = mes[i][4];
                    oTr.appendChild(oTd);
                    
                    var oTd = document.createElement('td');
                    oTd.innerHTML = '<a href="javascript:;">删除</a> | <a href="javascript:;">详情</a>'
                    oTr.appendChild(oTd);

                    oTd.getElementsByTagName('a')[0].onclick = function () {
                        $.ajax({
                            url: "http://localhost/order/deletecai.php",
                            type: "post",
                            data: {
                                uid:mes[i][0]
                            },
                            success: function (data) {
                               
                                    alert('删除成功')
                                    tableMes2()
                                
                            }
                        })
                    }
                   
                    oTd.getElementsByTagName('a')[1].onclick = function () {
                        goodContent[0].style.display='block';
                        
                            imgContent.innerHTML=`
                            <img src="${mes[i][5]}" width="150px" height="150px" alt="">`
                        mesContent[0].innerHTML=`
                        <p><span>ID:</span><span>${mes[i][0]}</span></p>
                        <p><span>菜品id:</span><span>${mes[i][1]}</span></p>
                        <p><span>菜名:</span><span>${mes[i][2]}</span></p>
                        <p><span>类型 :</span><span>${mes[i][3]}</span></p>
                        <p><span>价格:</span><span>${mes[i][4]}</span></p>
                       
                      
                        `
                    }
                    tableBodies.appendChild(oTr);
            }
        }
    }
    xhr.open('GET', 'http://localhost/order/selectcai', true)
    xhr.send(null)
}
window.onload = function () {
    state()
    tableMes()
    tableMes2()
    let oBtn = document.querySelectorAll('.index')
    let aDiv = document.querySelectorAll('.child');

    for (let i = 0; i < oBtn.length; i++) {
        oBtn[i].onclick = function () {
            for (let j = 0; j < oBtn.length; j++) {
                oBtn[j].className = '';
                oBtn[0].className = 'first-nav'
                oBtn[2].className = 'first-nav'
                aDiv[j].style.display = 'none';
            }
            this.className = 'active';
            aDiv[i].style.display = 'block';
        }
    }

    let firstNav = document.querySelectorAll('.first-nav')
    let biaozhi = document.querySelectorAll('.biaozhi')
    let childNav = document.querySelectorAll('.child-nav')
    let childNav2 = document.querySelectorAll('.child-nav2')
    let navChild = document.querySelectorAll('.navChild')
    let navChild2 = document.querySelectorAll('.navChild2')
    let children = document.querySelectorAll('.children')
    let children2 = document.querySelectorAll('.children2')

    function showList(nav, oDiv) {
        var style = window.getComputedStyle(nav[0]);
        if (style.display == 'none') {
            for (let i = 0; i < nav.length; i++) {
                nav[i].style.display = 'block';
            }
            oDiv.style.transform = 'rotateZ(180deg)'

        } else if (style.display == 'block') {
            for (let i = 0; i < nav.length; i++) {
                nav[i].style.display = 'none';
            }
            oDiv.style.transform = 'rotateZ(0)'

        }

    }
    firstNav[0].addEventListener("click", function () {
        showList(childNav, biaozhi[0])
    })
    firstNav[1].addEventListener("click", function () {
        showList(childNav2, biaozhi[1])
    })


    for (let i = 0; i < navChild.length; i++) {
        navChild[i].onclick = function () {
            for (let j = 0; j < navChild.length; j++) {
                navChild[j].className = ''
                children2[j].style.display = 'none'
                aDiv[j].style.display = 'none';
            }
            aDiv[0].style.display = 'block';
            navChild[i].className = 'activeNav'
            children2[i].style.display = 'block'
        }
    }
    for (let i = 0; i < navChild2.length; i++) {
        navChild2[i].onclick = function () {
            for (let j = 0; j < navChild2.length; j++) {
                navChild2[j].className = ''
                children[j].style.display = 'none'
                aDiv[j].style.display = 'none';
            }
            navChild2[i].className = 'activeNav'
            children[i].style.display = 'block'
            aDiv[2].style.display = 'block';
        }
    }
    let searchForm = document.querySelectorAll('.searchForm');
    let searchBtn = document.querySelectorAll('.searchBtn');
    let mesTable = document.querySelectorAll('.mesTable')
    let tableBodies = document.querySelectorAll('.tableBodies')
    let goBack = document.querySelectorAll('.goBack')
     for(let i=0;i<goBack.length;i++){
         goBack[i].onclick=function(){
            switch(i){
                case 0: tableMes();break;
                case 1: tableMes2();break;
            }
         }
     }
    searchBtn[0].onclick = function () {
        var formContent = new FormData(searchForm[0]);
        tableBodies[0].innerHTML = ''
        var xhr = new XMLHttpRequest;
        xhr.onreadystatechange = function () {
            if (xhr.status == 200 && xhr.readyState == 4) {
            var mes = JSON.parse(xhr.responseText);
            console.log(mes)


                for (let i = 0; i < mes.length; i++) {
                    var oTr = document.createElement('tr');
                    var oTd = document.createElement('td');
                    oTd.innerHTML = mes[i][0];
                    oTr.appendChild(oTd);
                    var oTd = document.createElement('td');
                    oTd.innerHTML = mes[i][1];
                    oTr.appendChild(oTd);
                    var oTd = document.createElement('td');
                    oTd.innerHTML = mes[i][2];
                    oTr.appendChild(oTd); 
                    var oTd = document.createElement('td');
                    oTd.innerHTML = '<a href="javascript:;">删除</a>'
                    oTr.appendChild(oTd);

                    oTd.getElementsByTagName('a')[0].onclick = function () {
                        $.ajax({
                            url: "http://localhost/order/deleteuser",
                            type: "post",
                            data: {
                                uid:mes[i][0]
                            },
                            success: function (data) {
                               
                                    alert('删除成功')
                                    tableMes()
                                
                            }
                        })
                    }
                    tableBodies[0].appendChild(oTr);
            }
                }
            }
xhr.open('POST','http://localhost/order/selectuserinfo')
        xhr.send(formContent)
        }

    searchBtn[1].onclick = function () {
        var formContent = new FormData(searchForm[1]);
        tableBodies[1].innerHTML = ''
        searchForm[1].beginTime = new Date(searchForm[1].beginTime).getTime();
        searchForm[1].endTime = new Date(searchForm[1].endTime).getTime();
        console.log(searchForm[1])
        var formContent = new FormData(searchForm[1]);
        var xhr = new XMLHttpRequest;
        xhr.onreadystatechange = function () {
            if (xhr.status == 200 && xhr.readyState == 4) {
                var mes = JSON.parse(xhr.responseText)
                console.log(mes)
                for (let i = 0; i < mes.length; i++) {
                    var oTr = document.createElement('tr');
                    var oTd = document.createElement('td');
                    oTd.innerHTML = mes[i][0];
                    oTr.appendChild(oTd);
                    var oTd = document.createElement('td');
                    oTd.innerHTML = mes[i][1];
                    oTr.appendChild(oTd);
                    var oTd = document.createElement('td');
                    oTd.innerHTML = mes[i][2];
                    oTr.appendChild(oTd); 
                    var oTd = document.createElement('td');
                    oTd.innerHTML = mes[i][3];
                    oTr.appendChild(oTd); 
                    var oTd = document.createElement('td');
                    oTd.innerHTML = mes[i][4];
                    oTr.appendChild(oTd); 
                    var oTd = document.createElement('td');
                    oTd.innerHTML = mes[i][5];
                    oTr.appendChild(oTd);
                  
                    var oTd = document.createElement('td');
                    oTd.innerHTML = '<a href="javascript:;">删除</a> | <a href="javascript:;">详情</a>'
                    oTr.appendChild(oTd);


                    oTd.getElementsByTagName('a')[0].onclick = function () {
                        $.ajax({
                            url: "http://localhost/order/deletecai.php",
                            type: "post",
                            data: {
                                uid:mes[i][0]
                            },
                            success: function (data) {
                               
                                    alert('删除成功')
                                    tableMes2()
                                
                            }
                        })  
                    }
                     
                         
                    oTd.getElementsByTagName('a')[1].onclick = function () {
                        goodContent[0].style.display='block';
                        
                            imgContent.innerHTML=`
                            <img src="${mes[i][6]}" width="150px" height="150px" alt="">`
                        mesContent[0].innerHTML=`
                        <p><span>ID:</span><span>${mes[i][0]}</span></p>
                        <p><span>菜品id:</span><span>${mes[i][1]}</span></p>
                        <p><span>菜名</span><span>${mes[i][2]}</span></p>
                        <p><span>类型 :</span><span>${mes[i][3]}</span></p>
                        <p><span>价格:</span><span>${mes[i][4]}</span></p>
                       
                        `
                    }
                    
                        tableBodies[1].appendChild(oTr);
                    }
                }
            }
        xhr.open('POST','http://localhost/order/selectcaiinfo.php')
        xhr.send(formContent)
    }
    let updata=document.getElementById('updata')
    let addMes=document.getElementById('addMes')

    addMes.onclick=function () {
        let datas=new FormData(updata)
        let xml=new XMLHttpRequest;
        xml.onreadystatechange=function(){
            if(xml.readyState==4&&xml.status==200){
                     var st=JSON.parse(xml.responseText)
                          if(st.code==1)
                         {
                            alert('添加成功')
                            location.reload([true])
                         }
                         else{
                            alert('添加失败')
                         }                     
                     
            }
           
        }
        xml.open('POST','http://localhost/order/insertcai.php')
        xml.send(datas)
  }  
}