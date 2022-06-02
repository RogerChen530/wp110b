var mean = [1,2,3,4,5],sum=0,average;
for(var i = 0 ; i < mean.length ; i++){
    sum += mean[i];
    average = sum / mean.length;
}
console.log(average)