const branchSpans = document.querySelectorAll('span.css-truncate-target');
const targetBranch = branchSpans[1].innerHTML;
const sourceBranch = branchSpans[2].innerHTML;
console.log(`GHH believes you are trying to merge ${sourceBranch} into ${targetBranch}`);

const mergeButtons = document.querySelectorAll('[data-details-container=".js-merge-pr"]');
const mergeCommit = mergeButtons[0];
const squash = mergeButtons[1];
const rebase = mergeButtons[2];

if (sourceBranch.indexOf('hotfix/') === 0) {
  squash.innerHTML = 'HOTFIX, DO NOT SQUASH';
  rebase.innerHTML = 'HOTFIX, DO NOT REBASE';
} else if (targetBranch === 'develop') {
  mergeCommit.innerHTML = 'NO MERGE COMMITS ON DEVELOP';
  rebase.innerHTML = 'USE SQUASH INSTEAD PLEASE';
} else if (targetBranch === 'master') {
  squash.innerHTML = 'MASTER, DO NOT SQUASH';
  rebase.innerHTML = 'MASTER, DO NOT REBASE';
}
