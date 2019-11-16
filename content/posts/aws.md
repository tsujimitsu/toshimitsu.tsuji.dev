# AWS

## Black Belt

- [AWS Black Belt Online Seminar 2017 AWS Elastic Beanstalk](https://www.slideshare.net/AmazonWebServicesJapan/aws-black-belt-online-seminar-2017-aws-elastic-beanstalk)
- [AWS Black Belt Online Seminar AWS Code Services Part 2](https://www.slideshare.net/AmazonWebServicesJapan/aws-black-belt-online-seminar-aws-code-services-part-2)

## Certificate

- [業務で開発経験なしでも取れる AWS 認定デベロッパーアソシエイトの勉強法](https://chariosan.com/2019/06/03/aws_developper_study/)

## AWS CDK

- [cdkworkshop](https://cdkworkshop.com)

## ALB

- [AWS ALB でホストベースルーティング設定](https://jyo-to.okinawa/20190330/2122/)
  - サブドメイン別のホスト名でルーティング先の EC2 を分ける

## NLB

- IP ターゲットのパターンであれば、IGW や NAT Gateway がなくても EC2 と通信できる
  - https://dev.classmethod.jp/cloud/aws/load-balancing-private-ec2-rds-nlb/
- Multi-AZ で Cross-Zone 負荷分散するためには、各 AZ に１つずつの NLB 配置が必要
- [AWS Network Load Balancer(NLB)のソース IP とターゲットのセキュリティグループ留意点まとめ](https://dev.classmethod.jp/cloud/nlb-source-ip-security-group-considerations/)
- [静的な IP アドレスを持つ NLB が TLS Termination に対応してアクセスログも出力可能に！](https://dev.classmethod.jp/cloud/aws/nlb-support-tls-termination-and-access-log/)
- [NLB で複数 AZ 構成での挙動](https://tech.unifa-e.com/entry/2018/03/16/111538)
- [Network Load Balancer（NLB）でクロスゾーン負荷分散が可能になりました](https://dev.classmethod.jp/cloud/aws/cross-zone-load-balancing-for-nlb/)
- [NLB (Network Load Balancer)の作成メモ](https://qiita.com/rubytomato@github/items/e15e0a508b9fbec526e0)

## VPC

- VPC 内で作成した EC2 であれば、Private IP は EC2 が停止しても固定されて変化しない
  - https://qiita.com/bellks51/items/42ea1696d45a1f867721
