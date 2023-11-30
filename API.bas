Attribute VB_Name = "ReadAPI"


' Before using request must install WinHttpRequest
' must install Microsoft scripting runtime to recognize objects
Sub ReadFromAPI()
    Dim URL As String
    Dim parameter As String
    Dim request As New WinHttpRequest
    
    URL = "https://api.nationalize.io?name=petrovra"
    parameter = ""
    request.Open "Get", URL & parameter
    'if we would need header, send this way
    'request.setRequestHeader "[NAME]", "[SING-UP-FOR-KEY]"
    request.Send
    
    If request.Status <> 200 Then
        MsgBox request.ResponseText
        Exit Sub
    End If
    
    'set response as valid json format
    Dim response As Object
    Set response = JsonConverter.ParseJson(request.ResponseText)
    
    'Access the data
    Debug.Print response("name")
    
    Dim countries As Collection
    Set countries = response("country")
    
    Dim country As Dictionary
    For Each country In countries
        Debug.Print country("country_id"), FormatPercent(country("probability"))
    Next country
    
End Sub


Public Function SMMLV(Optional year As Integer = 2023) As Long

    Dim URL As String
    Dim currentYear As Integer
    Dim request As New WinHttpRequest
    
    URL = "http://127.0.0.1:8000/api/salary/" & year
    request.Open "Get", URL
    request.Send
    
    If request.Status <> 200 Then
        MsgBox request.ResponseText
        Exit Function
    End If

    'set response as valid json format
    Dim response As Object
    Set response = JsonConverter.ParseJson(request.ResponseText)
    SMMLV = response("value")

End Function

Public Function UVT(Optional year As Integer = 2023) As Long
    Dim URL As String
    Dim request As New WinHttpRequest
    
    URL = "http://127.0.0.1:8000/api/uvt/" & year
    request.Open "Get", URL
    request.Send
    
    If request.Status <> 200 Then
        MsgBox request.ResponseText
        Exit Function
    End If

    'set response as valid json format
    Dim response As Object
    Set response = JsonConverter.ParseJson(request.ResponseText)
    UVT = response("value")
End Function

Public Function AUX_TRANS(Optional year As Integer = 2023) As Long
    Dim URL As String
    Dim request As New WinHttpRequest
    
    URL = "http://127.0.0.1:8000/api/transport-assistance/" & year
    request.Open "Get", URL
    request.Send
    
    If request.Status <> 200 Then
        MsgBox request.ResponseText
        Exit Function
        
    End If

    'set response as valid json format
    Dim response As Object
    Set response = JsonConverter.ParseJson(request.ResponseText)
    AUX_TRANS = response("value")
End Function


