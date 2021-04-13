# AxiosWithReactWithMobx

For mobx you only need to have understanding of 
1. Observable: It's a field , a variable on which actions has to be performed 
2. Action : These are functions which will act on your observable
3. Computation : these are final values one get from operations 

there are two ways to create mobx application 
1. Using decorators 
@Observable, @action , @computation : These are all decorators 

Limitation : Javascript doesn't provide support of decorators hence you need to convert these by using babel or webpack

You need to download two dependecies for decorators and add them in yur .babelrc file to compile 

2. Without decorators :
This will be the simplest approach where you don't need to go for any confiuration to compile this 

Here in this application also we have gone by without decorators 

Mobx provide a provision through decorate function 

decorate is the same , here there are two parameters first is the store name and the second is the fields in the store . You have to list each and every field what is action , observable and computation.

Note : decorate, action , observable , computation , runinaction all are imported from mobs. Verson should be around 6 


RunInAction : this is basically like a setstate function which will be used while making api calls. the data which you fetch fro api can be set to observable using runinaction

there are three more things to be known to run mobx application 
1. Provider : 
Provider basically comes from  mobx-react and it's used to connect this store to your react application

2. Inject : Once your store is connected wherever you ant to access the store properties, actions, coputation , you need to inject the store in that class or function 

if using class you can access the parameters by 

this.props.storename.observale 

if using function you can acess directly be
props.storename.observable

3. Observer:

whenever there is any change in the state in the store this bbserver hoc will help your react application to re render 

Note : whatever object you are providing in provider that should only be injected in the different classes and funtion

thanks