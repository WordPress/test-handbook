# Test Core Tickets with Playground

[**WordPress Playground**](https://wordpress.github.io/wordpress-playground/) is an online platform that lets you experiment and learn about WordPress without affecting your live website. It’s a virtual sandbox where you can test features, designs, and settings safely. More about it [here](https://wordpress.github.io).


## How to Test Core Tickets with Playground ?

1. Go to the Trac ticket and check that the ticket has GitHub PR or SVN patch. If a ticket has PR, you can test that trac ticket with PlayGround. If the Trac ticket has “.patch”. This automatic test environment will not work. 

   ![Trac Ticket Example](https://lh7-us.googleusercontent.com/GMVCu1gpKb9PtZO-MLSEtM0ih44sMV8-6Y1vqN_P4Vhy0J-xA7l2o4-PU_PLwE1FlQdcTTBM5LcXLbFxrmK909HhNRaQtr9tG85JiczeymcDAowicMYRUqJkAwrs8ShXDFWBzkZH9_6FbQFDO5SiojA "Example Trac Ticket")

2. Click on the **“View PR”** button, it will open the respective GitHub PR as shown in the below screenshot.

   ![GitHub PR Example](https://lh7-us.googleusercontent.com/jfj6Oh9zdLUV8nAZmQePsot4ZLq2pbx5cN189_1geM5WNP_j5yuACkdq8xE63RrGDdoLeBFSmrbNAXdflCvtuLX7cogEdv_TVxzDuCUFmT3gw-SYB32O7U3AZmGaFvP6iGIhMvnmRd2WIv3LPAzpGFU "GitHub Pull Request Example")

3. On the PR comment thread, it will find the GitHub action default comment about **‘Test using WordPress Playground’**
![GitHub PR Example](https://lh7-us.googleusercontent.com/uI5l87Nweki2atAJvO_PqTRuBlsK9L3__V-TIUyOpUI0uBYvmdDJPu-ZPc9Ts2AK8qJvufR60mrvKvWWUtlD3fb8T6frviB1yIYQ911dRyTI9ReQz7TkI1S086JMWJy3g-dwOrKuMcFSKpBGX9b6bXA "GitHub Pull Request Example")

4. You will find a link with the text **‘Test this pull request with WordPress Playground’**. Click on this link. It will create a disposable WordPress website with the changes implemented in the PR. 
![GitHub PR Example](https://lh7-us.googleusercontent.com/qtpqKkM_BkBy1KBPwBbyabzlD1u0Tv2qKeOja2J9V0yhNUxmVjOrwbOVzZkVnPCh_b4cfjp_85Vm60UnOQTVed9S6s7G9pXc_GvR61MoTGd_kFzgnG2nO5H_idDL5f55D_RvQCanetXRX80-R7MnraI "GitHub Pull Request Example")

5. Click on the **‘Go’** button if the page doesn’t redirect automatically to the WordPress site. 

   ![Playground Site Example](https://lh7-us.googleusercontent.com/5v-M_h1mE3HCXzZZ2ijLISSVyLRBCFeJIGYo1fsy2pDTJ8e7ishKs81rNZzBc9VIRER3wjjhLcpUDZYGfukPhM5pAcVA8A7nSOmchhHilkkmJSYrUTWLH4SxDPgwvxsz0nWe4_jjSXc9R0YLOBAxUEg "Playground Site Example")

6. You will see a new WordPress site in your browser window.

   ![Playground Site Example](https://lh7-us.googleusercontent.com/7u3USaDAUFV3iOEFH5UWTtGr-PKs7KC4vr_qlyhcgjomOvDx-MI7RZpqz6yJ4dm2vfeUdM22MIEoNfEnPqqoIfx_gVrl6SBHdK5tnx62iw0f6a37jHS9Nxqo7GPgWVYYBrr1YQJrMflZlULy7_cJkIM "Playground Site Example")

There are some limitations to this Playground environment. You can read more [here](https://wordpress.github.io/wordpress-playground/limitations).

- The Plugin and Theme Directories cannot be accessed within Playground (meaning you can not search plugin or theme from the search box).
- All changes will be lost when closing a tab with a Playground instance.
All changes will be lost when refreshing the page.
- A fresh instance is created each time the link below is clicked.
- Every time this pull request is updated, a new ZIP file containing all changes is created. If changes are not reflected in the Playground instance,
it’s possible that the most recent build failed, or has not completed. Check the [list of workflow runs to be sure](https://github.com/WordPress/wordpress-develop/actions/workflows/wordpress-playground.yml).

In the new WordPress environment. You can test the PR for the feature changes, bug fixes, regression issues and more.
