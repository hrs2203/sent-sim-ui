# Semantic Similarity UI

## Page List
- HomePage.js  : user Home Page
- LoginPage.js  : user Login Page
- RegisterPage.js  : user Register Page
- UserDetailPage.js  : user UserDetail Page
- APIDocs.js  : user API Docs -> Details about REST API that are available to use
- CorpusPage.js  : user Corpus Page -> Upload new corpus and view it.
- ComparePage.js : user Compare Page -> compare Many-to-Many Sentences
   - There will be 2 type of inputs. 1. Left side 2. Right Side
   - Each sentence will consist of 2 things
       - Sentence itself
       - Reply related to that sentence. ( for a customer review or detils of next action stored as text )
   - These sentences can be from i.e. form input or file upload. ( provide both options on both side )
   - Results will compute the required steps and will return:
       - For each sentence in left, the list of sentences from right sorted by there similarity.
