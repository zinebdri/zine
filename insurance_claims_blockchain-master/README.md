
Insurance Claims BlockChain
---
The Insurance Claims BlockChain is a dApp that runs against a local blockchain to demonstrate simple claims processing.

### Setup the Project
Project setup will require the following:
* NodeJS
* Ganache-cli
* MetaMask

Once the project is pulled down to your local do the following:
* npm install
* start your ganache blockchain
* seed metamask for new accounts
* truffle compile
* truffle migrate --reset 
* truffle test
* npm run dev
* navigate to http://locahlost:3000



### Workflow
The workflow described below will demonstrate a simple example of an Insurance Claims Process.  This is an academic project and not a production ready application.  Deviating from the process or trying to 'break' the application may require reseting of environments to continue desired behaviour.

#### User Story - Open Policy
Navigate to the Administration tab and Register as Policy Holder
![enter image description here](https://lh3.googleusercontent.com/pTRh77P6LVd24lTg1y4lUzD4PbGdoY5Zgo__fZINZCfwILv-jighIJAMoBPUaAvsDCzTXOzLObo)

Click on Register Policy Holder button and sign transaction with MetaMask
![enter image description here](https://lh3.googleusercontent.com/b9NULeq9EKAVLngiqdWkw81xwGg62-TCLnC7v8NbELxGZEAHm8DvQ7ofcu5p1_65fx7b7JyWteo)
 - note that once you click on 'Register Policy Holder' the dApp will display your current account # above the tabs.

Navigate to the Open Claim tab and enter data to process claim
![enter image description here](https://lh3.googleusercontent.com/mQO8MDBH94XitOLZnjjkEFIXmHUICuY2EfTiT_MQHuxo0onaZt45rLh1-DG-gbhiPSRP9baw9Bw)

Once data is filled out, click on Open Claim button and sign transaction with MetaMask
![enter image description here](https://lh3.googleusercontent.com/dllnW3lhSzguE54xeoibpRQGqdZvILnNt2SySlWN-vYGp6NdJivorSj1omwTEm-UG-Qn6Zb9RWI)
 - note that once transaction if processed, you will see the 'Number of Claims: x' number increment to '1' - reflecting state of contract
 - Claim is now open - onto the next User Story!

#### User Story - Appraise Claim
Navigate to the Administration tab and Register as Appraiser
![enter image description here](https://lh3.googleusercontent.com/XS4QabbRgHlqkf44ZtPb3a5m4iv0v6m0R8ph37PzBrAB3zO0xhDGTQ7kcXy-9m_dZpim0maCc5Q)

Click on the Register Appraiser button and sign with MetaMask
![enter image description here](https://lh3.googleusercontent.com/0GREvMyxE5-H5eQxDMuq87erYT6TjFLikPMfciY3LCNot9WMOK0SVIhVd_uh3lh-K4UKWNuKiVQ)


 - note that you can switch account in MetaMask for appraiser, and account information will be updated above tabs.   Please note that accounts need to be registered for the particular user story they will execute.   You can register the same account for all 'roles' for ease of testing (encouraged).

Navigate to Appraise Claim tab and enter data to appraise claim
![enter image description here](https://lh3.googleusercontent.com/LGDEUEvM0bdeCMr7NspLczoRpcnXxiZO_T5nwCPgCUH_BcrHCWAdloiyEX7zvqew_gn8CvzWq2U)
- note you must enter a claim number that exists

Once data is filled out, click on Appraise Claim button and sign transaction with MetaMask
![enter image description here](https://lh3.googleusercontent.com/E3kgkCTUoz_inIFJ_iXziPMT4skwjPpcmVp6dI87XHwvyoi5PjbLHsCzGVxGiGfqNXuuKy-0LMc)
 - Claim is now appraised - on to next User Story!

#### User Story - Approve Claim
Navigate to the Administration tab and Register as Claims Adjuster
![enter image description here](https://lh3.googleusercontent.com/6XjXdOxpnILOF91c-Fm1Yj8U9o5XnoYdTS1zXcGN346zyn9HZtiCm_miBy7RwUH-2_II-2tHqt8)


Click on the Register Claims Adjuster button and sign with MetaMask
![enter image description here](https://lh3.googleusercontent.com/Bo-a4NTiHr4HMaEH6rpS8qS4SRFn7Fy1l7Os6KwOxIQ74dIoc-BgiK5GAmMOQalbz2_AXqfSlJ0)

Navigate to Approve Claim tab and enter data to approve claim
![enter image description here](https://lh3.googleusercontent.com/_omPgHG5ssJaI0hd5kOQrg3LaTALnT1YxbjN0ziwuwVY4vvYKAWSUGCsvdQUxFMYnBM9BulRtks)


Once data is filled out, click on Approve Claim button and sign transaction with MetaMask
![enter image description here](https://lh3.googleusercontent.com/Xek5mPT1-FoPwmyrdjVrJB7O2kd1febF6GYpEVzN-djL5B9b_wVFcNWWZx4i-7cldRhd4kUcAEM)

 - Claim is now approved and Claim State is closed.

#### Claims process is now complete!


