import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import FormsUsers from './src/FormsUsers';
import { auth } from './src/fireBaseConnection';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import FormsUsers from './src/FormsUsers';
 
 
export default function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [authUser, setAuthUser] = useState(null)

  useEffect(()=>{
      const unsub = onAuthStateChanged(auth, (user) =>{
        if(user){
          setAuthUser({
            email: user.email,
            uid: user.uid
          })
          return;
        }
        setAuthUser(null)
      }) 
  }, [])
 
  async function handleCreateUser() {
    const user = await createUserWithEmailAndPassword(auth, email, password)
    console.log(user)
   
  }

  function handleLogin(){
    signInWithEmailAndPassword(auth, email, password)
    .then((user) =>{
      console.log(user);
      setAuthUser({
        email: user.user.email,
        uid: user.user.uid
      })
    })
    .catch(err => {
      if(err.code === "auth/missing-password"){
        console.log("Asenha é obrigatória")
        return;
      }
      console.log(err.code)
    })
  }

  async function handleLogout(){
    await signOut(auth)
    setAuthUser(null)
  }

  if(authUser){
    return(
      <View style={styles.container}>
        <FormsUsers />
      </View>
    )
  }
  return(
    <View style={styles.container}>
      <Text style={{marginBottom: 10}}>Usuario que está logado:{authUser && authUser.email}</Text>
      <Text style={{ marginLeft: 8, fontSize: 18, color: "#000"}}>Email:</Text>
      <TextInput style={styles.input}
      placeholder='Digite seu e-mail'
      value={email}
      onChangeText={(text) => setEmail(text)}
      />
      <Text style={{ marginLeft: 8, fontSize: 18, color: "#000"}}>Senha:</Text>
      <TextInput style={styles.input}
      placeholder='Digite a sua senha'
      value={password}
      onChangeText={(text) => setPassword(text)}
      secureTextEntry={true}
      />

      <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
        <Text style={styles.buttonText}>Fazer Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleCreateUser}>
        <Text style={styles.buttonText}>Criar uma conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonLogout} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    marginLeft: 8,
    marginRight: 8,
    borderWidth: 1,
    marginBottom: 14
  },
  buttonLogin: {
    backgroundColor: '#c42501',
    marginRight: 8,
    marginLeft: 8,
    padding: 8,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#350223',
    marginRight: 8,
    marginLeft: 8,
    padding: 8
  },
  buttonLogout: {
    backgroundColor: '#104439',
    marginRight: 8,
    marginLeft: 8,
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
})