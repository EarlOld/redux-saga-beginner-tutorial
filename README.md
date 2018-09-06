# redux-saga-beginner-tutorial
Companion Repo for [Redux/Redux-saga beginner tutorial](https://github.com/redux-saga/redux-saga/blob/master/docs/introduction/BeginnerTutorial.md)

# Instructions

Setup

```
// clone the repo
https://github.com/joes-code/redux-saga-beginner-tutorial

cd redux-saga-beginner-tutorial

npm install
```

Run the demo

```
npm start
```

### Issue
Open Javascript Console in **Google Chrome** browser and click on 'Loop' button

Expected result:
```
Hello Sagas!
loop # 0 
0 "-" 405450 
loop # 1 
1 "-" 405450 
loop # 2 
2 "-" 405450 
loop # 3 
3 "-" 405450 
loop # 4 
4 "-" 405450  
```

Actual result:
```
Hello Sagas!
loop # 0
0 "-" 405450
loop # 1
1 "-" 405450
loop # 2
```
Notes: the issue doesn't appear in Firefox or Safari (at least for this setting). If increase the loop count, similar issue appears on all three browsers. The only difference is that Chrome process only 2 loops whereas Firefox and Safari might process 25 loops. 