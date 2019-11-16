---
title: Python Script on AWS Lambda
slug: python-script-on-aws-lambda
tags:
- "aws"
- "python"
date: 2015-12-23T00:00:00+09:00
draft: false
---


Step1 select blueprint
------------------------
* select "Lambda" from AWS Management Console
* select "lambda-canary"


Step2 configure event sources
--------------------------------
```
    Event source type: "Scheduled Event"
    Name: "foobar"
    Description: "foobar"
    Schedule: "rate(5 minutes)"
```

Step3 configure function
--------------------------
```
    Name: "foobar"
    Description: "foobar"
    Runtime: "Python 2.7"
    
    function code: "python script"

    Handler: "lambda_function.lambda_handler"
    Role: "lambda_basic_execution"
    
    Memory(MB): "128"
    Timeout: "10sec"
```

reference
----------
* [AWS LambdaÇPythonÇ≈Scheduleé¿çsÇ≥ÇπÇÈ](http://qiita.com/taka4sato/items/67c62db6b86e14375bbd)
